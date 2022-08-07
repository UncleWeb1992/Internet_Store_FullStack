import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import localStorageService from "../services/localsStorage.Service";
import { httpService } from "../services/http.service";
import userService from "../services/users.service";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();
const authEnPoind = "auth/";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = async (payload) => {
    try {
      const { data } = await httpService.post(authEnPoind + "/signUp", payload);

      if (currentUser) {
        logOut();
      } else {
        localStorageService.setTokens(data);
      }
    } catch (err) {
      const { message } = err.response.data.error;
      if (message === "EMAIL_EXISTS") {
        const errorObject = {
          email: "Пользователь с таким email уже существует",
        };
        throw errorObject;
      }
    }
  };

  const signIn = async (payload) => {
    try {
      const { data } = await httpService.post(
        authEnPoind + "signInWithPassword",
        payload
      );
      localStorageService.setTokens(data);
      getUserData();
    } catch (error) {
      const { message } = error.response.data.error;
      if (message === "EMAIL_NOT_FOUND") {
        const errorObject = {
          email: "Пользователь не найден",
        };
        throw errorObject;
      }
      if (message === "INVALID_PASSWORD") {
        const errorObject = {
          password: "Не верный пароль",
        };
        throw errorObject;
      }
    }
  };

  const getUserById = async (id) => {
    try {
      const { data } = await userService.getUserById(id);
      return data;
    } catch (error) {
      const { message } = error.response.data.error;
      return message;
    }
  };

  async function getUserData() {
    try {
      const { data } = await userService.getUserById(
        localStorageService.getUserId()
      );

      if (data && data.email === "watefalls@mail.ru") {
        setCurrentUser({ ...data, admin: true });
      } else {
        setCurrentUser(data);
      }
    } catch (error) {
      const { message } = error;
      return message;
    }
  }

  function logOut() {
    localStorageService.removeAuthData();
    setCurrentUser(null);
    history.push("/");
  }

  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, currentUser, signIn, getUserById, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
