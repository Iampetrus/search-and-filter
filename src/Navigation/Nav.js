// I need to make this work. Search bar is not working!!
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { CiShoppingCart } from "react-icons/ci";
function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search here"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <CiShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <HiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
