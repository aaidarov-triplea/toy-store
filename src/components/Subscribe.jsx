import styled from "../styles/Subscribe.module.css";
import { FaTelegramPlane } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="container">
      <div className={styled.content}>
        <div className={styled.content__text}>
          <a href="#" className={styled.telegram__icon}>
            <FaTelegramPlane />
          </a>
          <h3>
            Subscribe to our newsletter & get <span>10% discount!</span>
          </h3>
        </div>
        <div className={styled.content__submit}>
          <div className={styled.submit__inputBox}>
            <input type="text" />
          </div>
          <a href="#" className={styled.submit__btn}>
            Submit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
