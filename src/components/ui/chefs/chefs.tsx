import { FC, useContext } from "react";
import { ThemeContext } from "../../../themeContext";
import { dataChefs } from "./dataChefs";
import { UniversalChefCard } from "./universalChefCard";

import "./chef.css";

interface ChefProps {
  key?: string;
  id?: string;
  image?: string;
  text?: string;
  social?: string;
  title?: string;
  subtext?: string;
  imageFood?: string;
}

export const Chefs: FC<ChefProps> = ({
  key,
  id,
  image,
  text,
  social,
  title,
  subtext,
  imageFood,
}) => {
  //   const dataContext: any = useContext(ThemeContext);
  return (
    <>
      <div className="chefs">
        {dataChefs.map((item) => (
          <UniversalChefCard
            key={item.id}
            id={item.id}
            image={item.image}
            text={item.text}
            social={item.social}
            title={item.title}
            subtext={item.subtext}
            imageFood={item.imageFood}
          />
        ))}
      </div>
    </>
  );
};
