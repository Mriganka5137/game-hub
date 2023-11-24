import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <Input
      type="search"
      placeholder="Search..."
      className="max-w-screen-lg rounded-full bg-secondary/30"
    />
  );
};

export default SearchBar;
