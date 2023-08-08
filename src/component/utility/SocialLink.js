import React from "react";
import { socialLink } from "../../data";

const SocialLink = ({ ulLink, aLink }) => {
  return (
    <ul className={ulLink}>
      {socialLink.map((item) => {
        const { id, href, icon } = item;
        return (
          <li key={id}>
            <a href={href} target="_blank" className={aLink} rel="noreferrer">
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLink;
