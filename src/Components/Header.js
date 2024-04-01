import { LOGO_URL } from "../utils/constants";
import { CART_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useeffect called");
  }, [btnName]);

  return (
    <div className="flex justify-between bg-sky-100 mb-2 shadow-lg"  >
      <div className="logo-container">
        <img className="logo w-[80px]" src={LOGO_URL} />
      </div>

      <div className="flex">
        <ul className="flex space-x-12 p-3 m-2 items-center font-bold">
          <li className="text-green-600">{onlineStatus ? "Online" : "Offline"}</li>

          <li flex space-x-1>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <img className="w-[44px] h-[40px]" src={CART_URL} />
          </li>
        <li>  <button 
            className="border border-solid border-blue-700 rounded-lg p-2 bg-blue-300"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
