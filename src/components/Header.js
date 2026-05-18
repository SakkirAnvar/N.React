import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header-container">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
