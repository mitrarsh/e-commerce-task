import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../store/cartStore";
import { sidebarToggle } from "../../store/sidebarStore";

const NavContainer = () => {
  const sidebarIsOpen = sidebarToggle((state) => state.sidebarIsOpen);
  const toggleSidebar = sidebarToggle((state) => state.toggleSidebar);
  const { cartItems } = useContext(CartItemsContext);
  const cartItemsCount = cartItems.length;

  return (
    <nav className="bg-white p-8 justify-between flex gap-[2rem] navbar">
      <img
        className={` ${
          sidebarIsOpen ? "hidden" : "block"
        } top-[1.5rem] right-[4rem] md:-right-[5rem] md:hidden`}
        src={`/assets/icons/menu.svg`}
        alt="ffghfg"
        onClick={toggleSidebar}
      />

      <h1 className="flex-1 ">E-Commerce</h1>
        <div className="hidden md:flex flex-1  align-middle h-fit gap-[3rem] text-gray-600 font-medium">
        <Link to="/shop" className="navbar-option">Shop</Link>
        <Link to="/about" className="navbar-option">About</Link>
        <Link to="/contact" className="navbar-option">Contact</Link>
      </div>
      <Link to="/cart" className="relative">
        <img src="/assets/icons/Cart1.svg" />
        {cartItemsCount > 0 ? (
          <div className="cart-count-sign absolute bg-[#db5962] -top-[0.75rem] -right-[0.5rem] rounded-full flex ">
            <p className="cart-count">{cartItemsCount}</p>
          </div>
        ) : null}
      </Link>
      <div className="w-fit rounded-full overflow-hidden">
        <img className="w-[3.5rem]" src="/assets/icons/user.svg" alt="" />
      </div>
    </nav>
  );
};

export default NavContainer;
