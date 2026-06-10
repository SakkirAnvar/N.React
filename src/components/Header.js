import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedUser} = useContext(UserContext)
  return (
    <div className="header-container flex justify-between items-center bg-red-500">
      <div className="logo">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="nav-items flex p-5 m-5">
        <ul className="flex text-white hover:text-shadow-white">
          <li className="px-4 ">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 ">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <div className="px-4">
            <button
              className=" w-20 h-8 border-gray-50 bg-gray-50 rounded-lg text-black cursor-pointer hover:bg-white"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </div>
           <li className="px-4">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
