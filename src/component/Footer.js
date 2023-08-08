import React from "react";
import PageLink from "./utility/PageLink";
import SocialLink from "./utility/SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink ulLink="footer-links" aLink="footer-link"></PageLink>
      <SocialLink ulLink="footer-icons" aLink="footer-icon"></SocialLink>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
