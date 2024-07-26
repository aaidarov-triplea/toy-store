import styled from "../styles/Hero.module.css";
import scrollM from "../assets/scroll.png";

const Hero = () => {
  return (
    <div className={styled.hero}>
      <div className={styled.heroContent}>
        <div className={styled.heroContent__info}>
          <h6>Say Hello to ToyStore!</h6>
          <h1>Free Ecommerce Template for Webflow</h1>
          <a href="#" className={styled.info__btn}>
            Open Catalog
          </a>
        </div>
      </div>
      <div className={styled.hero__scroll}>
        <img src={scrollM} alt="scroll mouse" />
      </div>
    </div>
  );
};

export default Hero;
