import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="header__social sicial__footer">
          <a
            href="https://www.instagram.com/in_yan737/"
            className="social_link insta"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../../img/insta-footer.svg"
              alt="instagram"
              className="footer__social insta__img"
            ></img>
          </a>
          <a
            href="https://vk.com/in_yan_revda"
            className="social_link vk"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../../img/vk-footer.svg"
              alt="vk"
              className="footer__social vk__img"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
