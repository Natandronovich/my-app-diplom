import styled from "styled-components";
import { Theme, ThemeType } from "../../../themeContext/theme";

interface PostCardProps {
  myTheme: ThemeType;
  themeStyles: Theme;
  key: number;
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
};
