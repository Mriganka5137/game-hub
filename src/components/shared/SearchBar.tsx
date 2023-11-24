import { useRef } from "react";
import { Input } from "../ui/input";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="w-full "
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) {
          console.log(inputRef.current.value);
        }
      }}
    >
      <Input
        type="search"
        placeholder="Search..."
        className="max-w-screen-lg mx-auto rounded-full bg-secondary/30"
        ref={inputRef}
      />
    </form>
  );
};

export default SearchBar;
