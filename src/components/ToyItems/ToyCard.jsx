import styled from "../../styles/toyItems/ToyCard.module.css";
import PropTypes from "prop-types";

const ToyCard = ({ toyName, img, price }) => {
  return (
    <a href="#" className={styled.card}>
      <div className={styled.card__img}>
        <img src={img} alt="toys image" />
      </div>
      <h3 className={styled.card__title}>{toyName}</h3>
      <span className={styled.card__price}>$ {price} USD</span>
    </a>
  );
};

//props
ToyCard.propTypes = {
  toyName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ToyCard;
