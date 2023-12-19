// import { useState } from "react";
// import headerlogo from "../../logo.jpg";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Title = () => <img src={headerlogo} alt="logo" className="logo" />;

// const Header = () => {
//   let title = "Food Villa";
//   const [loggedBtn, setLoggedBtn] = useState("Log in");
//   const online = useOnlineStatus();
//   return (
//     <div className="header">
//       <Title />
//       <h1>{title}</h1>

//       <div className="nav-items">
//         <ul>
//           <li>Online Status:{online ? "☑️" : "🔴"}</li>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//           <li>
//             <Link to="/grocery">Grocery</Link>
//           </li>
//           <li>Cart</li>
//           <li>
//             <button
//               onClick={() => {
//                 loggedBtn === "Log in"
//                   ? setLoggedBtn("Log out")
//                   : setLoggedBtn("Log in");
//               }}
//               className="logged-btn"
//             >
//               {loggedBtn}
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import headerlogo from "../../logo.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loggedBtn, setLoggedBtn] = useState("Log in");
  let title = "Food Villa";
  const online = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-20 p-1 rounded-3xl" src={headerlogo} alt="logo" />
      </div>
      <div className="title-container">
        <h1 className="text-2xl p-5">{title}</h1>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{online ? "☑️" : "🔴"}</li>
          <li className="px-4 hover:text-blue-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  hover:text-blue-400">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4  hover:text-blue-400">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4  hover:text-blue-400">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4  hover:text-blue-400">Cart</li>
          <li>
            <button
              onClick={() => {
                loggedBtn === "Log in"
                  ? setLoggedBtn("Log out")
                  : setLoggedBtn("Log in");
              }}
              className="logged-btn px-4 w-[100px]  hover:text-blue-400"
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
