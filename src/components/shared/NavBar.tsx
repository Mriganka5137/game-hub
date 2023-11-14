import logo from "../../assets/logo.webp";

const NavBar = () => {
  return (
    <nav className=" flex items-center gap-3">
      <img src={logo} height={60} width={60} alt="logo" />
      <span>Navbar</span>
    </nav>
  );
};

export default NavBar;
