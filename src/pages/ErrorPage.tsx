import MenuSheet from "@/components/shared/MenuSheet";
import NavBar from "@/components/shared/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <MenuSheet />
      <NavBar />
      <div className="p-5 ">
        <h1 className="mb-3 text-4xl">Oops</h1>
        <h1>
          {isRouteErrorResponse(error)
            ? "This page doesnot exists !!"
            : "Something unexpected happended !!"}
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
