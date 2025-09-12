import { Outlet } from "react-router-dom";
import SideBarBox from "./sidebar/SideBarBox.js";
import NavContainer from "./navbar/NavContainer.js";

const RootLayout = () => {
  return (
    <main className="flex flex-row ">
      <SideBarBox />
      <div className="flex-1 flex flex-col gap-[2rem]">
        <NavContainer/>

        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
