import styled from "styled-components";
import { Theme, ThemeType } from "../../../themeContext/theme";

interface PostCardProps {
  myTheme: ThemeType;
  themeStyles: Theme;
  key?: number;
  padding?: string;
}

export const RecipeContainer = styled.div<PostCardProps>`
background-color: ${({ themeStyles }) => themeStyles.cardBackground};
color: ${({ themeStyles }) => themeStyles.text};
box-shadow: ${({ themeStyles }) => themeStyles.cardBoxShadow};
border-radius: 10px;
max-width: 310px;
height: 370px;
}
`;
// height: auto;


interface PostStyleType {
  [key: string]: React.CSSProperties;
}

export const postsStyles: PostStyleType = {
  postsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    columnGap: '30px',
    rowGap: '30px',
    padding: '50px 0',

  },
  postImage:{
    maxWidth: "100%",
    height: "auto",
    borderRadius: '10px 10px 0 0',
  },
  postText:{
    padding: '15px 20px',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '1.3',
  },
  singleRecipeContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: '30px',
    // padding: '30px 0',
    flexDirection: "column",
  }

};

export const FavoriteContainer = styled.div<PostCardProps>`
background-color: ${({ themeStyles }) => themeStyles.cardBackground};
color: ${({ themeStyles }) => themeStyles.text};
box-shadow: ${({ themeStyles }) => themeStyles.cardBoxShadow};
border-radius: 10px;
max-width: 500px;
// height: 370px;
padding:30px;

@media (max-width: 768px) {
  padding:15px;
}
`;


export const SingleRecipeContainer = styled.div<PostCardProps>`
background-color: #ffffff;
color: #000000;
box-shadow: ${({ themeStyles }) => themeStyles.cardBoxShadow};
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 25px;
margin-bottom: 30px;
}`

//color: ${({ themeStyles }) => themeStyles.text};

export const ButtonSinglePost = styled.div<PostCardProps>`
    font-weight: 700;
    font-size: 14px;
    width: 110px;
    height: 30px;
    padding: 5px;
    background: ${({ themeStyles }) => themeStyles.backgroundBtn};
    font-weight: 600;
    color: #ffffff;
    border-radius: 25px;
    cursor: pointer;
    transition: all ease-in 0.5s;
    text-align:center;
    margin-right:10px;
    transition: all 0.5s ease-out;
     &:hover,
  &:focus {
    background: #3824ac8d;
  }
  &:active {
    background: #5d42f2;
  }
`