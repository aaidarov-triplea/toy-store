import styled from "../styles/Header.module.css";
import Cart from "./Cart";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <header>
      <div className={styled.header}>
        <div className="container">
          <div className={styled.contactContent}>
            <div className={styled.contacts}>
              <a href="tel:+12139745898">Call Us: +1 213 974-5898</a>
              <a href="mailto:toystore@template.com">
                Email: toystore@template.com
              </a>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className={styled.nav}>
        <div className="container">
          <div className={styled.navAndCartContent}>
            <div className={styled.logo}>
              <a href="/" className={styled.logo__title}>
                Toy Store
              </a>
              <Navigation />
            </div>
            <Cart />
          </div>
        </div>
      </div>
      {/* container */}
    </header>
  );
};

export default Header;
