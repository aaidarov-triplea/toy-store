import SeeAllToys from "./ToyItems/SeeAllToys";
import ToyCard from "./ToyItems/ToyCard";
import { STUFFED_TOYS, WOODEN_TOYS } from "../toys";
import styled from "../styles/ToyCardItem.module.css";

const ToyCardItem = () => {
  return (
    <div className="container">
      <div className={styled.cardItem__wrapper}>
        <SeeAllToys title="Stuffed Animals" />
        <div className={styled.cardItem}>
          {STUFFED_TOYS.map((toy) => (
            <ToyCard
              key={toy.id}
              toyName={toy.title}
              img={toy.img}
              price={toy.price}
            />
          ))}
        </div>
      </div>

      <div className={styled.cardItem__wrapper}>
        <SeeAllToys title="Wooden Toys" />
        <div className={styled.cardItem}>
          {WOODEN_TOYS.map((toy) => (
            <ToyCard
              key={toy.id}
              toyName={toy.title}
              img={toy.img}
              price={toy.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToyCardItem;
