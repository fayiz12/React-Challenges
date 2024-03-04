import logo from "../../images/Nike-Logo.png"

const Header = () => {
  return (
    <div className="header">
        <img className="logo" alt="logo" src={logo}></img>

      <ul className="nav">
        <li>Home</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="login">Login</button>
    </div>
  );
};

export default Header;
