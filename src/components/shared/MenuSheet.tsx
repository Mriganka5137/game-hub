import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import GenreList from "./GenreList";
const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto ">
        <div className="flex items-center gap-2 mb-3">
          <Link to="/">
            <img src={logo} height={60} width={60} alt="logo" className="" />
          </Link>
          <h1 className="p-1 mb-3 text-2xl font-semibold">Genres</h1>
        </div>
        <GenreList />
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
