import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Modal from "../coomon/modal";
import AuthForm from "../ui/authForm";

const Header = () => {
  const [active, setActive] = useState(false);
  const { currentUser, logOut } = useAuth();
  const outLogin = (e) => {
    e.stopPropagation();
    logOut();
  };
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img
          src="../../img/header/logo.png"
          alt="In-yan logo"
          className="header__logo-img"
        ></img>
      </Link>
      <div className="header-time_job">
        <img
          src="../../img/header/clock.svg"
          alt="time icon"
          className="header__time--img"
        ></img>
        <p className="time_job-text">Работаем ежедневно с 11:00 до 23:00</p>
      </div>
      <div className="header__call">
        <img
          src="../../img/header/tel.svg"
          alt="telephone icon"
          className="header__call--img"
        ></img>
        <a href="tel: +79122070737" className="header_tel">
          8 912-207-07-37
        </a>
      </div>
      <div className="header__social">
        <a
          href="https://www.instagram.com/in_yan737/"
          className="social_link insta"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="../../img/header/insta.png"
            alt="instagram"
            className=" header__social insta__img"
          ></img>
        </a>
        <a
          href="https://vk.com/in_yan_revda"
          className="social_link vk"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="../../img/header/vk.svg"
            alt="instagram"
            className="header__social vk__img"
          ></img>
        </a>
      </div>
      <div
        className="header__auth"
        title="Войти"
        onClick={() => setActive(true)}
      >
        {currentUser ? (
          <div className="logOut" onClick={outLogin}>
            Выйти
          </div>
        ) : (
          ""
        )}
      </div>
      {active && (
        <Modal active={active} setActive={setActive}>
          <AuthForm setActive={setActive} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
