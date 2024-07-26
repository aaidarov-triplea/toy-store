import styled from "../styles/ForBusinnes.module.css";
import IMG from "../assets/image.jpg";

const ForBusinnes = () => {
  return (
    <div className="container">
      <div className={styled.content}>
        <div className={styled.content__text}>
          <h6>Made for Webflow</h6>
          <h1>Simple & Colorful Ecommerce Template for Your Business</h1>
        </div>
        <div className={styled.content__info}>
          <div className={styled.info__text}>
            <h2>Available for FREE!</h2>
            <div className={styled.info__text_line}></div>
            <p>
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy
            </p>
            <a href="#" className={styled.info__text_link}>
              Get ut now!
            </a>
          </div>
          <div className={styled.info__img}>
            <img src={IMG} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForBusinnes;
