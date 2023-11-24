import logo from "../../assets/logo.webp";
import ModeToggle from "../theme/ModeToggle";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between gap-3 px-2 py-2 shadow-md bg-secondary/50">
      <img src={logo} height={60} width={60} alt="logo" />
      <SearchBar />
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
