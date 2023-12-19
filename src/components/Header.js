import { useState } from "react";
import headerlogo from "../../food-villa.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => <img src={headerlogo} alt="logo" className="logo" />;

const Header = () => {
  let title = "Food Villa";
  const [loggedBtn, setLoggedBtn] = useState("Log in");
  const online = useOnlineStatus();
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>

      <div className="nav-items">
        <ul>
          <li>Online Status:{online ? "☑️" : "🔴"}</li>
          <li>
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
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                loggedBtn === "Log in"
                  ? setLoggedBtn("Log out")
                  : setLoggedBtn("Log in");
              }}
              className="logged-btn"
            >
              {loggedBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
