import "./homeStyle.css";
// import imgSrc from "../../../assets/food-image.png";

export const Home = () => {
  return (
    <div className="section container">
      <div className="home">
        <div className="home-text">
          <div className="underline"></div>
          <h3 className="text-descr">OVER 1000 RECIPES</h3>
          <h2 className="title">Enjoy Foods All Over The World</h2>
          <h3>
            We have selected the best recipes from different countries for your
            enjoyment.
          </h3>
        </div>
        <div className="home-images">{/* <image src={imgSrc} /> */}</div>
      </div>
    </div>
  );
};
