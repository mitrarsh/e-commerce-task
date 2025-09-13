import { Link } from "react-router-dom";

const NavContainer = () => {
  return (
    <nav className="bg-white p-8 justify-between flex">
      <h1>E-Commerce</h1>
      <Link to='/cart'>
        <img src="/assets/icons/Cart1.svg" />
      </Link>
    </nav>
  );
};

export default NavContainer;
