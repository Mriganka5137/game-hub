import MenuSheet from "@/components/shared/MenuSheet";
import NavBar from "@/components/shared/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className=" flex w-full mx-auto max-w-screen-[1800px] shadow-md bg-secondary/50 p-2 ">
        <NavBar />
        <MenuSheet />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
