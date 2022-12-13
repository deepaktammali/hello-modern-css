import {
  productCard,
  productCardContainer,
  productCardContent,
  productCardImage,
  productCardCTAButton,
  productCardHeading,
  productCardDescription,
} from "./Card.css";

const Card = () => {
  return (
    <div className={productCardContainer}>
      <div className={productCard}>
        <img
          className={productCardImage}
          src="https://images.unsplash.com/photo-1622467827417-bbe2237067a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
          alt="cookies"
        />
        <div className={productCardContent}>
          <span className={productCardHeading}>Hello There</span>
          <span className={productCardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde
            placeat ad illum, porro ullam reiciendis ea explicabo recusandae,
            architecto esse? Libero doloremque architecto quae eum expedita
            maiores alias explicabo?
          </span>
          <button className={productCardCTAButton}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
