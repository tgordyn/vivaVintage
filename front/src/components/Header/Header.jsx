import { useState, useRef, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import {
  FaBars,
  FaShoppingCart,
  FaUserCircle,
  FaUserCheck,
} from "react-icons/fa";
import logo from "../../assets/deer.svg";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/reducer/authSlice";

import "./Header.scss";
// eslint-disable-next-line react/prop-types
const Header = ({ toggleDrawer, logoutUser }) => {
  const state = useSelector((state) => state);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const avatarRef = useRef(null);
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOutsideClick = (event) => {
    if (
      isDropdownOpen &&
      avatarRef.current &&
      !avatarRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const logOut = () => {
    dispatch(logoutUser());
    localStorage.removeItem("Authorization");
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
    // eslint-disable-next-line
  }, [isDropdownOpen]);

  console.log("state!", state);
  return (
    <header className="header sticky z-50 top-0 px-[18px] md:px-[40px] mb-4">
      <div className="header__menu">
        <button className="header__menu-button" onClick={toggleDrawer}>
          <FaBars className="header__menu-icon" />
        </button>
      </div>
      {/* <div className="header__logo"> */}
      <Link className="header__logo " to="/">
        <h1 className="header__logo-text text-lg sm:text-3xl md:text-4xl">
          Viva
        </h1>
        <img
          src={logo}
          alt="Logo"
          className="header__logo-image w-[55px] sm:w-[70px] md:w-[90px]"
        />
        <h1 className="header__logo-text text-lg sm:text-3xl md:text-4xl">
          Vintage
        </h1>
      </Link>
      {/* </div> */}
      <div className="header__links">
        <Link
          to="/cart"
          className="header__links-link"
          style={{ display: "flex" }}
        >
          <FaShoppingCart className="header__link-icon" size={26} />
          <span className="absolute top-9 right-16 md:right-[86px] rounded-full bg-white w-[20px] items-center place-content-center flex text-sm font-bold">
            {state.handleCart.totalQuantity}
          </span>
        </Link>

        {/* Icono de avatar de usuario */}
        <div
          className="avatar cursor-pointer"
          onClick={toggleDropdown}
          ref={avatarRef}
        >
          {state.authReducer.isLoggedIn ? (
            <FaUserCheck id="avatar-icon" size={26} />
          ) : (
            <FaUserCircle id="avatar-icon" size={26} />
          )}
        </div>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="header__user-dropdown z-30">
            {state.authReducer.isLoggedIn ? (
              <Link to="/" className="header__user-option" onClick={logOut}>
                Log Out
              </Link>
            ) : (
              <Link
                to="/sign-in"
                className="header__user-option"
                onClick={toggleDropdown}
              >
                Iniciar sesión
              </Link>
            )}

            <Link
              to="/register"
              className="header__user-option"
              onClick={toggleDropdown}
            >
              Crear cuenta
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default connect(null, { logoutUser })(Header);
