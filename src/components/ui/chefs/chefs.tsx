import { FC } from "react";
import { UniversalChefCard } from "./universalChefCard";

import "./chef.css";
import { dataChefs } from "./dataChefs";

interface ChefProps {
  key?: string;
  id?: string;
  image?: string;
  text?: string;
  social?: string;
  title?: string;
  subtext?: string;
  imageFood?: string;
  socialTitle?: string;
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
  socialTitle,
}) => {
  return (
    <>
      <div className="chefs">
        {dataChefs.map((item: any) => (
          <UniversalChefCard
            key={item.id}
            id={item.id}
            image={item.image}
            text={item.text}
            social={item.social}
            title={item.title}
            subtext={item.subtext}
            imageFood={item.imageFood}
            socialTitle={item.socialTitle}
          />
        ))}
      </div>
    </>
  );
};
