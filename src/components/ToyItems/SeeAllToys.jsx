import PropTypes from "prop-types";
import { TiArrowRightThick } from "react-icons/ti";
import styled from "../../styles/toyItems/SeeAllToys.module.css";

const SeeAllToys = ({ title }) => {
  return (
    <div className={styled.toy}>
      <div className={styled.toyContent}>
        <h2 className={styled.toyContent__title}>{title}</h2>
        <a href="#" className={styled.toyContent__link}>
          See All Toys
          <TiArrowRightThick />
        </a>
      </div>
      <div className={styled.scrollContent}>
        <span className={styled.scroll}></span>
      </div>
    </div>
  );
};

//props
SeeAllToys.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SeeAllToys;
