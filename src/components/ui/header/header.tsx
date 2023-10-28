import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ThemeButton } from "../changeThemeButton/themeButton";
import { AuthContext } from "../../../authContext/authProvider";
import { ThemeContext } from "../../../themeContext";
import logo from "./Logo.png";

import "./headerStyle.css";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const dataContext: any = useContext(ThemeContext);

  const dataFromContext = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    dataFromContext.logoutF();
    navigate("/");
  };

  const activeLink = "header-list__link header-list__link-active";
  const normalLink = "header-list__link";

  const activeHeaderList = "header-list active";
  const normalHeaderList = "header-list";

  return (
    <div className="header">
      <div className="container">
        <div className="header-row">
          <NavLink to="/" className="logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className={nav ? activeHeaderList : normalHeaderList}>
            <li className="header-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className="header-list__item">
              <NavLink
                to="/recipes"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Recipes
              </NavLink>
            </li>
            <li className="header-list__item">
              <NavLink
                to="/chefs"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Chefs
              </NavLink>
            </li>
            <li className="header-list__item">
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Favorites
              </NavLink>
            </li>
          </ul>

          <button className="logout-btn" onClick={logout}>
            Log out
          </button>
          <ThemeButton />
          <div className="mobile-btn" onClick={() => setNav(!nav)}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </div>
  );
};
