import styled from "styled-components";
import { Theme, ThemeType } from "../../../themeContext/theme";

interface MainContainerProps{
    myTheme: ThemeType,
    themeStyles: Theme,
}

export const StyledMain = styled.div<MainContainerProps>`
background-color: ${({themeStyles}) => themeStyles.pageBackground};
color: ${({themeStyles}) => themeStyles.text};
`;

interface MainStyleType {
    [key: string] : React.CSSProperties;
};

export const mainStyles: MainStyleType = {
    mainContainer:{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
    },
}