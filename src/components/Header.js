import { useState } from "react";
import headerlogo from "../../food-villa.jpg";
import { Link } from "react-router-dom";
const Title = () => <img src={headerlogo} alt="logo" className="logo" />;
const Header = () => {
  const [loggedBtn, setLoggedBtn] = useState("Log in");
  let title = "Food Villa";

  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
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
