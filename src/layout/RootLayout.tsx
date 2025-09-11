import { Outlet } from "react-router-dom";
import SideBarBox from "../components/UI/sidebar/SideBarBox.js";
import NavContainerr from "../components/UI/navbar/NavContainerr.js";

const RootLayout = () => {
  return (
    <main className="flex flex-row ">
      <SideBarBox />
      <div className="flex-1">
        <NavContainerr/>

        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
