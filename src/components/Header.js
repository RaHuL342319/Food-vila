import headerlogo from "../../food-villa.jpg";

const Title = () => <img src={headerlogo} alt="logo" className="logo" />;
const Header = () => {
  let title = "Food Villa";
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
};

export default Header;
