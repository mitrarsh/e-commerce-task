import { Link } from "react-router-dom";
import { sidebarToggle } from "../../store/sidebarStore";

const NavContainer = () => {
  const sidebarIsOpen = sidebarToggle((state) => state.sidebarIsOpen);
  const toggleSidebar = sidebarToggle((state) => state.toggleSidebar);

  return (
    <nav className="bg-white p-8 justify-between flex gap-[2rem]">
      <img
        className={` ${
          sidebarIsOpen ? "hidden" : "block"
        } top-[1.5rem] right-[4rem] md:-right-[5rem] md:hidden`}
        src={`/assets/icons/menu.svg`}
        alt="ffghfg"
        onClick={toggleSidebar}
      />
      <h1 className="flex-1">E-Commerce</h1>
      <Link to="/cart">
        <img src="/assets/icons/Cart1.svg" />
      </Link>
    </nav>
  );
};

export default NavContainer;
