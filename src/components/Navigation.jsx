import styled from "../styles/Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styled.navigation} ${styled.footer__nav}`}>
      <a href="#">Catalog</a>
      <a href="#">Delivery</a>
      <a href="#">About</a>
      <a href="#">Contacts</a>
    </nav>
  );
};

export default Navigation;
