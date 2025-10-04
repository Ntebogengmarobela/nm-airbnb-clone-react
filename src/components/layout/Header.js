import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="logo"
        className="header_logo"
      />
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <MenuIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
