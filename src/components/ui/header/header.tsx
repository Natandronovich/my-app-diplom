import { NavLink } from "react-router-dom";
import "./headerStyle.css";
import { ThemeButton } from "../changeThemeButton/themeButton";
import { useContext } from "react";
import { ThemeContext } from "../../../themeContext";

export const Header = () => {
  const dataContext: any = useContext(ThemeContext);
  console.log("dataContext", dataContext);

  const activeLink = "header-list__link header-list__link-active";
  const normalLink = "header-list__link";

  return (
    <div className="header">
      <div className="container">
        <div className="header-row">
          <NavLink to="/" className="logo">
            <h2>LOGO</h2>
            <p>{dataContext.currentTheme}</p>
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
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};
