import { useRef } from "react";
import { Input } from "../ui/input";
import useGameQueryStore from "@/store";

const SearchBar = () => {
  const handleSearch = useGameQueryStore((s) => s.handleSearch);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="w-full "
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) {
          handleSearch(inputRef.current.value);
        }
      }}
    >
      <Input
        type="search"
        placeholder="Search..."
        className="max-w-screen-lg mx-auto border-none rounded-full dark:bg-slate-800 bg-slate-200/50"
        ref={inputRef}
      />
    </form>
  );
};

export default SearchBar;
