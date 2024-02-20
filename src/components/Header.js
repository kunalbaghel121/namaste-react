import { useState } from "react";
import { LOGO_LINK } from "./utils/constants";

const Header = () => {

    const [loginBtn,setloginBtn]=useState("login");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_LINK}
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=> {loginBtn==="login" ? setloginBtn("logout"): setloginBtn("login")}}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;