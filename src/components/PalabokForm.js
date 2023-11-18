import { useState, useCallback } from "react";
import PopUpMeal1 from "./PopUpMeal1";
import PortalPopup from "./PortalPopup";
import styles from "./PalabokForm.module.css";

const PalabokForm = () => {
  const [isPopUpMeal1Open, setPopUpMeal1Open] = useState(false);
  const [isPopUpMeal11Open, setPopUpMeal11Open] = useState(false);

  const openPopUpMeal11 = useCallback(() => {
    setPopUpMeal11Open(true);
  }, []);

  const closePopUpMeal11 = useCallback(() => {
    setPopUpMeal11Open(false);
  }, []);

  const openPopUpMeal1 = useCallback(() => {
    setPopUpMeal1Open(true);
  }, []);

  const closePopUpMeal1 = useCallback(() => {
    setPopUpMeal1Open(false);
  }, []);

  return (
    <>
      <div className={styles.rectangleParent} onClick={openPopUpMeal11}>
        <div className={styles.groupChild} onClick={openPopUpMeal1} />
        <div className={styles.palabok}>Palabok</div>
        <div className={styles.div}>₱40.00</div>
        <div className={styles.lamehNgaPalabok}>Lameh nga palabok</div>
        <img className={styles.image67Icon} alt="" src="/image-67@2x.png" />
      </div>
      {isPopUpMeal11Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          onOutsideClick={closePopUpMeal11}
        >
          <PopUpMeal1 onClose={closePopUpMeal11} />
        </PortalPopup>
      )}
      {isPopUpMeal1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closePopUpMeal1}
        >
          <PopUpMeal1 onClose={closePopUpMeal1} />
        </PortalPopup>
      )}
    </>
  );
};

export default PalabokForm;
