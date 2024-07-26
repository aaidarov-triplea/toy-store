import { LiaShoppingCartSolid } from "react-icons/lia";
import styled from "../styles/Cart.module.css";
const Cart = () => {
  return (
    <div className={styled.cartContent}>
      <h3 className={styled.cartContent__title}>Cart</h3>
      <LiaShoppingCartSolid className={styled.cartContent__icon} />
      <div className={styled.cartContent__count}>
        <span>0</span>
      </div>
    </div>
  );
};

export default Cart;
