import React from "react";
import logo from "../images/logo.svg";
import PageLink from "./utility/PageLink";
import SocialLink from "./utility/SocialLink";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <PageLink ulLink="nav-links" aLink="nav-link"></PageLink>
          <SocialLink ulLink="nav-icons" aLink="nav-icon"></SocialLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
