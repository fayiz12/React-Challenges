import logo from "../assets/logos_firebase.svg";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <img className="logo-img" src={logo}></img>
      <h2>Firebase Contact App</h2>
    </div>
  );
};

export default Navbar;
