import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { openModal } from "../../actions/modalActions";
import { logout } from "../../actions/userActions";
import Login from "../Login";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const openModalHandler = () => {
    dispatch(openModal("open", <Login />));
  };
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="header">
      <img
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="logo"
        className="header_logo"
      />

      <div className="header_center">
        <input type="text" placeholder="Start your search" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="dropdown">
          <MenuIcon className="dropbtn" />
          <div className="dropdown_content">
            {userInfo ? (
              <>
                <span>Account</span>
                <span onClick={logoutHandler}>Log out</span>
              </>
            ) : (
              <>
                <span>Sign up</span>
                <span onClick={openModalHandler}>Log in</span>
              </>
            )}
            <span style={{ cursor: "pointer" }}>Help</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
