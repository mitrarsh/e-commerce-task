import { Outlet } from "react-router-dom";
import SideBarBox from "./sidebar/SideBarBox.js";
import NavContainerr from "./navbar/NavContainerr.js";

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
