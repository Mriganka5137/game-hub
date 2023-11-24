import logo from "../../assets/logo.webp";
import ModeToggle from "../theme/ModeToggle";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-3 shadow-md bg-secondary/50 ">
      <img src={logo} height={60} width={60} alt="logo" />

      <ModeToggle />
    </nav>
  );
};

export default NavBar;
