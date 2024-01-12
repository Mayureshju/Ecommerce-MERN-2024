import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const user = { _id: "gg", role: "admin" };
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logOutHandler = () => {
    setIsOpen(false);
  };
  return (
    <nav className="header">
      <Link
        to={"/"}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Home
      </Link>
      <Link
        to={"/search"}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <FaSearch />{" "}
      </Link>
      <Link
        onClick={() => {
          setIsOpen(false);
        }}
        to={"/cart"}
      >
        <FaShoppingBag />{" "}
      </Link>
      {user?._id ? (
        <>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaUser />
            <dialog open={isOpen}>
              <div>
                {user.role === "admin" && (
                  <>
                    <Link to={"/admin/dashboard"}>Admin</Link>
                    <Link to={"/orders"}>Orders</Link>
                    <button onClick={logOutHandler}>
                      <FaSignOutAlt />
                    </button>
                  </>
                )}
              </div>
            </dialog>
          </button>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />{" "}
        </Link>
      )}
    </nav>
  );
};

export default Header;
