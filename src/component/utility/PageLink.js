import React from "react";
import { pageLink } from "../../data";

const PageLink = (props) => {
  return (
    <ul className={props.ulLink} id="nav-links">
      {pageLink.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.href} className={props.aLink}>
              {item.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLink;
