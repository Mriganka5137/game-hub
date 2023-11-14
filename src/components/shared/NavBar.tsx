import logo from "../../assets/logo.webp";
import ModeToggle from "../theme/ModeToggle";

const NavBar = () => {
  return (
    <nav className=" flex items-center justify-between px-5 py-3">
      <div className=" flex items-center">
        <img src={logo} height={60} width={60} alt="logo" />
        <span>Navbar</span>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
