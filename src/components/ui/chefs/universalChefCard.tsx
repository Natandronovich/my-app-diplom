import { postsStyles } from "../posts/postsStyled";
import "./chef.css";

interface propsChefs {
  id: string;
  image: string;
  text: string;
  social: string;
  title: string;
  subtext: string;
  imageFood?: string;
}

export const UniversalChefCard = (props: propsChefs) => {
  // const dataContext: any = useContext(ThemeContext);
  // console.log(dataContext);

  return (
    <>
      <div>
        <div className="" id={props.id}>
          <div className="chef-card">
            <div className="chef-card-title">
              <h2 style={postsStyles.postText}>{props.title}</h2>
            </div>
            <div className="chef-image">
              <img src={props.image} alt={props.title} />
            </div>

            <div className="divider"></div>
            <div className="chef-subtext container">
              <p className="subtext-shef">{props.subtext}</p>
            </div>

            <div className="divider"></div>
            <div className="chef-content">
              <div className="column container">
                <div>
                  <p className="subtext-shef">Social:</p>
                  <a href={props.social}>Instagram</a>
                  {/* <p>{props.social}</p> */}
                </div>
                <div>
                  <p>{props.text}</p>
                </div>
                {/* <div className="chef-food-image">
                  <img src={props.imageFood} alt={props.title} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};
