import { NavLink, useNavigate } from "react-router-dom";
import "./headerStyle.css";
import { ThemeButton } from "../changeThemeButton/themeButton";
import { useContext } from "react";
import { ThemeContext } from "../../../themeContext";
import logo from "./Logo.png";
import { AuthContext } from "../../../authContext/authProvider";

export const Header = () => {
  const dataContext: any = useContext(ThemeContext);
  // console.log("dataContext", dataContext);

  const dataFromContext = useContext(AuthContext);
  // console.log("AUTH", dataFromContext);

  const navigate = useNavigate();

  const logout = () => {
    dataFromContext.logoutF();
    navigate("/");
  };

  const activeLink = "header-list__link header-list__link-active";
  const normalLink = "header-list__link";

  return (
    <div className="header">
      <div className="container">
        <div className="header-row">
          <NavLink to="/" className="logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className="header-list">
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
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <button className="logout-btn" onClick={logout}>
            Log out
          </button>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};
