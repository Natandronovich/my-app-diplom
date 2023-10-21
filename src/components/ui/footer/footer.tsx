import { NavLink } from "react-router-dom";
import { footerStyles } from "./footer.styles";
import { SocialList } from "./footerSocialList";
import "./footerStyle.css";

export const Footer = () => {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.footerWrapper}>
        <SocialList />
        <NavLink
          className="footer__link"
          to="https://github.com/Natandronovich"
        >
          © 2023 Natallia Andranovich
        </NavLink>
      </div>
    </footer>
  );
};
