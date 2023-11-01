import React from "react";
import logo from "../assets/gx-blog-logo.jpg";
import darkLogo from "../assets/gx-blog-dark-logo.jpg";
import "./Header.scss";
import { Button, Switch } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";

const Header = ({ darkModeOn, setDarkModeOn }) => {
  const navigate = useNavigate();

  return (
    <div
      className={darkModeOn ? "header-container dark-mode" : "header-container"}
    >
      <img
        src={darkModeOn ? darkLogo : logo}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
        onClick={() => navigate("/")}
      ></img>
      {/* <ul className='menu-container'>
        <li>Articles</li>
        <li>stories</li>
        <li>share</li>
      </ul> */}
      <Button
        className='first-button-container'
        appearance='transparent'
        onClick={() => {
          navigate("/blog");
          console.log("blog!");
        }}
      >
        Blog
      </Button>
      <Button
        appearance='transparent'
        onClick={() => {
          navigate("/about");
          console.log("about page!");
        }}
      >
        About
      </Button>
      {/* <Button appearance='transparent'>Articles</Button> */}
      {/* <Button appearance='primary' className='last-button-container'>
        Get Started
      </Button> */}
      <Switch
        label='Dark Mode'
        onChange={() => setDarkModeOn(!darkModeOn)}
      ></Switch>
    </div>
  );
};

export default Header;
