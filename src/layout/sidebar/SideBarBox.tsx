import { Link } from "react-router-dom";
import { sidebarToggle } from "../../store/sidebarStore";
import SidebarOption from "./sidebarOption";
const SideBarBox = () => {
  const sidebarIsOpen = sidebarToggle((state) => state.sidebarIsOpen);
  const toggleSidebar = sidebarToggle((state) => state.toggleSidebar);

  return (
    <div className={`${sidebarIsOpen ? "flex" : "hidden"} md:flex `}>
      <div className={`bg-[white] h-screen w-[20rem] flex flex-col gap-[2rem] p-8 `}>
        <div className="flex w-full justify-end">
          <img
            className={`
               ${sidebarIsOpen ? "block" : "hidden"} 
               top-[1.5rem] right-[4rem] md:-right-[5rem] md:hidden
               `}
            src={`/assets/icons/close.svg`}
            onClick={toggleSidebar}
          />
        </div>
        <Link to="/">
          <SidebarOption option="Home" />
        </Link>
        <Link to="/users">
          <SidebarOption option="َUsers" />
        </Link>
        <Link to="/login">
          <SidebarOption option="َLogin" />
        </Link>
      </div>
    </div>
  );
};

export default SideBarBox;
