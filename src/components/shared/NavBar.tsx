import logo from "../../assets/logo.webp";
import ModeToggle from "../theme/ModeToggle";

import SearchBar from "./SearchBar";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <nav className="flex items-center justify-between flex-1 gap-3 px-2 py-2 ">
      <img
        src={logo}
        height={60}
        width={60}
        alt="logo"
        className=" max-lg:hidden"
      />
      <SearchBar onSearch={onSearch} />
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
