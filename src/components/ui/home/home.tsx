import "./homeStyle.css";
import imgSrc from "../../../assets/food-image.png";
import { useContext } from "react";
import { ThemeContext } from "../../../themeContext";

export const Home = () => {
  const dataContext = useContext(ThemeContext);

  return (
    <div className="section ">
      <div className="home container">
        <div className="home-text">
          <div className="home-descr">
            <div className="underline"></div>
            <h3 className="text-descr">OVER 1000 RECIPES</h3>
          </div>

          <h2
            className={
              dataContext.currentTheme === "light"
                ? "title"
                : "title dark-theme"
            }
          >
            Enjoy Foods All Over The <span>World</span>
          </h2>
          <h3 className="subtitle-home">
            We have selected the best recipes from different countries for your
            enjoyment.
          </h3>
        </div>
        <div className="home-images">
          <img src={imgSrc} alt="plate of food" />
        </div>
      </div>
    </div>
  );
};
