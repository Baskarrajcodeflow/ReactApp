import React from "react";
import "./sidenavComponent.css";
import AvatarComponent from "../AvatarComponent/avatarcomponent";
import menuIcon from "../../Assets/menu-icon.png";
import closeIcon from "../../Assets/close.png";
import { useState } from "react";
import Home from "../Home/home";
import AboutMe from "../About/about";

const MenuList = () => {
  const [state, setState] = useState(true);

  const menuDisable = () => {
    setState(false);
  };
  const menuEnable = () => {
    setState(true);
  };

  const clickMe = () => {
    const scrollToAbout = document.getElementById("about");
    scrollToAbout.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div>
        <ul>
          <li>
            <a>HOME</a>
            <a onClick={clickMe}>ABOUT</a>
            <a>PROJECTS</a>
            <a>CONTACT</a>
          </li>
        </ul>
        <>
          {state ? (
            <div className="menuBar">
              <img
                onClick={menuDisable}
                src={menuIcon}
                style={{ width: "30px", cursor: "pointer" }}
                alt=""
              />
            </div>
          ) : (
            <div className="menuBar">
              <img
                onClick={menuEnable}
                src={closeIcon}
                style={{
                  width: "23px",
                  cursor: "pointer",
                  height: "23px",
                  marginTop: "5px",
                }}
                alt=""
              />
            </div>
          )}
        </>
      </div>
    </header>
  );
};

const SideNavComponent = () => {
  return (
    <div>
      <div className="header">
        <MenuList />
        <AvatarComponent />
      </div>
      <section>
        <Home />
      </section>
      <section>
        <AboutMe />
      </section>
    </div>
  );
};

export default SideNavComponent;
