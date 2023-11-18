import { useState, useCallback } from "react";
import AddedToCart from "./AddedToCart";
import PortalPopup from "./PortalPopup";
import styles from "./PopUpMeal1.module.css";

const PopUpMeal1 = ({ onClose }) => {
  const [isAddedToCartOpen, setAddedToCartOpen] = useState(false);
  const [isAddedToCart1Open, setAddedToCart1Open] = useState(false);

  const openAddedToCart1 = useCallback(() => {
    setAddedToCart1Open(true);
  }, []);

  const closeAddedToCart1 = useCallback(() => {
    setAddedToCart1Open(false);
  }, []);

  const openAddedToCart = useCallback(() => {
    setAddedToCartOpen(true);
  }, []);

  const closeAddedToCart = useCallback(() => {
    setAddedToCartOpen(false);
  }, []);

  return (
    <>
      <div className={styles.popUpMeal1}>
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-139.svg" />
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <div className={styles.specialInstructions}>
              Special Instructions
            </div>
            <div className={styles.typeHere}>Type here</div>
            <div className={styles.pleaseLetUs}>
              Please let us know if we need to avoid anything in the meal.
            </div>
            <div className={styles.optional}>Optional</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>₱30.00</div>
            <img
              className={styles.image67Icon}
              alt=""
              src="/image-671@2x.png"
            />
            <b className={styles.palabok}>Palabok</b>
            <div className={styles.pancitPalabokIs}>
              Pancit Palabok is a Filipino rice noodle dish with a rich pork and
              shrimp sauce, similar to a ragu.
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.ellipseDiv} />
            <button
              className={styles.rectangleContainer}
              onClick={openAddedToCart1}
            >
              <div className={styles.rectangleDiv} onClick={openAddedToCart} />
              <div className={styles.addToCart}>ADD TO CART</div>
            </button>
            <div className={styles.div1}>1</div>
            <div className={styles.ellipseParent}>
              <div className={styles.groupChild1} />
              <div className={styles.wrapper}>
                <div className={styles.div2}>+</div>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.div3}>-</div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild2} />
            <div className={styles.div4}>+₱15.00</div>
            <div className={styles.div5}>+₱25.00</div>
            <div className={styles.div6}>+ ₱10.00</div>
            <div className={styles.addOns}>Add-ons</div>
            <div className={styles.groupChild3} />
            <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
            <div className={styles.rice}>Rice</div>
            <div className={styles.groupChild4} />
            <div className={styles.coke}>Coke</div>
            <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
            <div className={styles.groupChild5} />
            <div className={styles.mlWater}>500ml Water</div>
            <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
          </div>
        </div>
      </div>
      {isAddedToCart1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.5)"
          placement="Centered"
          onOutsideClick={closeAddedToCart1}
        >
          <AddedToCart onClose={closeAddedToCart1} />
        </PortalPopup>
      )}
      {isAddedToCartOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddedToCart}
        >
          <AddedToCart onClose={closeAddedToCart} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopUpMeal1;
