
import styled from "styled-components";
import { Theme, ThemeType } from "../../../themeContext/theme";

import { keyframes } from 'styled-components'

    const fade = keyframes`
    0% {
      left: 1px;
    }
    100% {
      left: 26px;
    }
`;

interface MyButtonProps {
    myTheme?: string;
    themeStyles: Theme;
    themeType?: ThemeType;
    type?:string;
}

export const MyButton = styled.button<MyButtonProps>`
position: relative;
display: flex;
justify-content: space-between;
width: 51px;
height: 26px;
background-color: #272727;
padding: 5px;
border-radius: 50px;

&::before {
    position: absolute;
    top: 1px;
    left: 1px;
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 50%;
    transition: all 0.5s ease-in;
  };
  }

&:hover::before {
  left: 26px;
  // animation: ${fade}all 0.5s ease-in;
}
`;
