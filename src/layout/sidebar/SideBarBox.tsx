import { useState } from "react";
import SidebarOption from "./sidebarOption";
import { Link } from "react-router-dom";
const SideBarBox = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="relative pl-8">
      
      <div className={ `bg-[white] h-screen w-[20rem] flex-col gap-[2rem] p-8 ${menuIsOpen?"flex":"hidden"} md:flex`}>
        <Link to="/">
          <SidebarOption option="Home" />
        </Link>
        <Link to="/admin-pannel">
          <SidebarOption option="َAdmin Pannel" />
        </Link>
        <Link to="/login">
          <SidebarOption option="َLogin" />
        </Link>
          
      </div>
      <img
        className={` ${menuIsOpen? "absolute": "block"} top-[1.5rem] -right-[6rem] md:-right-[5rem] md:hidden`}
        src={`/assets/icons/${menuIsOpen?"close":"menu"}.svg`}
        alt="ffghfg"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />
    </div>
  );
};

export default SideBarBox;
