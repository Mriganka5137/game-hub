import logo from "../../assets/logo.webp";
import ModeToggle from "../theme/ModeToggle";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <nav className="flex items-center justify-between gap-3 px-2 py-2 shadow-md bg-secondary/50">
      <img src={logo} height={60} width={60} alt="logo" />
      <SearchBar onSearch={onSearch} />
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
