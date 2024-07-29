import styled from "../styles/Footer.module.css";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styled.footer__wrapper}>
          <div className={styled.content}>
            <a href="/" className={styled.logo__title}>
              Toy Store
            </a>
            <Navigation />
            <SocialMedia />
          </div>
          <div className={styled.footer__under}>
            <div className={styled.created}>
              <span>Created with love by Elastic Themes</span>
            </div>
            <div className={styled.powered}>
              <span>Powered by Webflow</span>
              <li>Style Guide</li>
              <li>Licensing</li>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
