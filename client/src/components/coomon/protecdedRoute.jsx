import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtecdedRoute = ({ component: Component, children, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser && currentUser.admin) {
          return Component ? <Component {...props} /> : children;
        }

        return (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtecdedRoute;
