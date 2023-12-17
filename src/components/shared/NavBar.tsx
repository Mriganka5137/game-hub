import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import ModeToggle from "../theme/ModeToggle";

import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-1 gap-3 px-2 py-2 ">
      <Link to="/">
        <img src={logo} height={60} width={60} alt="logo" className="" />
      </Link>
      <SearchBar />
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
