import styled from "../styles/InstaPage.module.css";
import { INSTA_IMG } from "../toys";

const InstaPage = () => {
  return (
    <div className="container">
      <div className={styled.content}>
        <div className={styled.content__text}>
          <h6>@ElasticThemes</h6>
          <h2>We{"'"}re on Instagram!</h2>
        </div>
        <div className={styled.content__item}>
          {INSTA_IMG.map((item) => (
            <div className={styled.content__card} key={item.id}>
              <img
                src={item.imgUrl}
                alt={item.desc}
                className={styled.content__card_img}
              />
            </div>
          ))}
        </div>
        <a href="#" className={styled.content__link}>
          See More Photos
        </a>
      </div>
    </div>
  );
};

export default InstaPage;
