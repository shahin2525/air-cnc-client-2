import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="pt-28 pb-10">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Main;
