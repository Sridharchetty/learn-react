import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// Header Component
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header-container flex justify-between items-center p-5 border-b mb-5 shadow-sm">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" className="logo" width={120} height={120} />
      </div>
      <nav className="navbar">
        <ul className=" flex items-center space-x-4 text-lg">
          <li>Your Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to={"/"}>Home </Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
            onClick={() => {
              setLoginBtn("Logout");
            }}
            className="btn"
          >
            {loginBtn}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
