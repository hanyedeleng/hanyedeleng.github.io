import React from "react";
import logo from "../assets/gx-blog-logo.jpg";
import "./Header.scss";
import { Button } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header-container'>
      <img
        src={logo}
        style={{ width: "40px", height: "40px" }}
        onClick={() => navigate("/")}
      ></img>
      {/* <ul className='menu-container'>
        <li>Articles</li>
        <li>stories</li>
        <li>share</li>
      </ul> */}
      <Button
        appearance='transparent'
        onClick={() => {
          navigate("/articles");
          console.log("articles!");
        }}
      >
        Articles
      </Button>
      <Button appearance='transparent'>Articles</Button>
      <Button appearance='transparent'>Articles</Button>
      <Button appearance='primary' className='get-started-container'>
        Get Started
      </Button>
    </div>
  );
};

export default Header;
