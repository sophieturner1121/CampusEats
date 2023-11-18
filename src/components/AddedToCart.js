import styles from "./AddedToCart.module.css";

const AddedToCart = ({ onClose }) => {
  return (
    <div className={styles.addedToCart}>
      <div className={styles.addedToCart1}>Added to Cart!</div>
    </div>
  );
};

export default AddedToCart;
