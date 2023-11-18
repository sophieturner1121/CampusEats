import { useCallback } from "react";
import styles from "./Cart.module.css";

const Cart = ({ onClose }) => {
  const onGroupContainer7Click = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  return (
    <div className={styles.cart}>
      <div className={styles.cartChild} />
      <img
        className={styles.frameIcon}
        alt=""
        src="/frame1.svg"
        onClick={onClose}
      />
      <img className={styles.image67Icon} alt="" src="/image-671@2x.png" />
      <b className={styles.palabok}>Palabok</b>
      <div className={styles.div}>₱40.00</div>
      <div className={styles.cartItem} />
      <div className={styles.div1}>1</div>
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <div className={styles.wrapper}>
          <div className={styles.div2}>+</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.div3}>-</div>
      </div>
      <b className={styles.batchoy}>Batchoy</b>
      <div className={styles.div4}>₱40.00</div>
      <div className={styles.cartInner} />
      <div className={styles.div5}>1</div>
      <div className={styles.ellipseGroup}>
        <div className={styles.groupChild} />
        <div className={styles.wrapper}>
          <div className={styles.div2}>+</div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.div3}>-</div>
      </div>
      <img className={styles.image63Icon} alt="" src="/image-631@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupInner} />
        <div className={styles.applyVoucher}>Apply voucher</div>
      </div>
      <b className={styles.b}>₱85.00</b>
      <b className={styles.total}>Total</b>
      <div className={styles.div8}>₱5.00</div>
      <div className={styles.orderFee}>Order Fee</div>
      <div className={styles.div9}>₱80.00</div>
      <div className={styles.subtotal}>Subtotal</div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer7Click}>
        <div className={styles.groupChild1} />
        <div className={styles.checkout}>CHECKOUT</div>
      </div>
      <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
      <div className={styles.myCart}>My Cart</div>
    </div>
  );
};

export default Cart;
