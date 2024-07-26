import styled from "../styles/StuffedAndWoodenToys.module.css";
import toy1 from "../assets/toy1.png";
import toy2 from "../assets/toy2.png";

const StuffedAndWoodenToys = () => {
  return (
    <div className="container">
      <div className={styled.card__container}>
        <div className={styled.card}>
          <div className={styled.card__content}>
            <img
              src={toy1}
              alt="Stuffed Animal"
              className={styled.card__image}
            />
            <div className={styled.card__text}>
              <h2>Stuffed Animals</h2>
              <a href="#" className={styled.btn}>
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className={styled.card}>
          <div className={styled.card__content}>
            <div className={styled.card__text}>
              <h2>Wooden Toys</h2>
              <a href="#" className={styled.btn}>
                Shop Now
              </a>
            </div>
            <img src={toy2} alt="Wooden Toys" className={styled.card__image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StuffedAndWoodenToys;
