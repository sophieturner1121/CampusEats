import { useCallback } from "react";
import HotcakeForm from "../components/HotcakeForm";
import { useNavigate } from "react-router-dom";
import styles from "./Breakfast2.module.css";

const Breakfast2 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/menu-nonuser");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/breakfast2");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/lunch2");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/lunch2");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/snacks2");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/snacks2");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/drinks2");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/drinks2");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.breakfast2}>
      <div className={styles.breakfast2Child} />
      <div className={styles.citUCafeteria}>CIT-U CAFETERIA</div>
      <div className={styles.palabok}>Palabok</div>
      <div className={styles.div}>₱40.00</div>
      <div className={styles.lamehNgaPalabok}>Lameh nga palabok</div>
      <img className={styles.image67Icon} alt="" src="/image-67@2x.png" />
      <div className={styles.breakfast2Item} />
      <div className={styles.meatroll}>Meatroll</div>
      <div className={styles.div1}>₱15.00</div>
      <div className={styles.soMeatty}>so meatty</div>
      <img className={styles.image72Icon} alt="" src="/image-72@2x.png" />
      <div className={styles.breakfast2Inner} />
      <div className={styles.batchoy}>Batchoy</div>
      <div className={styles.div2}>₱40.00</div>
      <div className={styles.masHotPa}>mas hot pa ni idle</div>
      <img className={styles.image63Icon} alt="" src="/image-63@2x.png" />
      <HotcakeForm />
      <div className={styles.rectangleParent} onClick={onGroupContainer1Click}>
        <div className={styles.groupChild} />
        <div className={styles.all}>All</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.searchMealHere}>Search Meal Here</div>
      </div>
      <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} onClick={onRectangle6Click} />
        <div className={styles.breakfast}>Breakfast</div>
      </div>
      <div className={styles.groupDiv} onClick={onGroupContainer4Click}>
        <div className={styles.groupInner} onClick={onRectangle7Click} />
        <div className={styles.lunch}>Lunch</div>
      </div>
      <div className={styles.rectangleParent1} onClick={onGroupContainer5Click}>
        <div className={styles.groupInner} onClick={onRectangle8Click} />
        <div className={styles.snacks}>Snacks</div>
      </div>
      <div className={styles.rectangleParent2} onClick={onGroupContainer6Click}>
        <div className={styles.groupInner} onClick={onRectangle9Click} />
        <div className={styles.drinks}>Drinks</div>
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-1.svg" />
      <img className={styles.campuseatsIcon} alt="" src="/campuseats.svg" />
      <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
      <img
        className={styles.frameIcon}
        alt=""
        src="/frame2.svg"
        onClick={onFrameIconClick}
      />
      <img className={styles.image80Icon} alt="" src="/image-80@2x.png" />
      <img className={styles.image81Icon} alt="" src="/image-81@2x.png" />
    </div>
  );
};

export default Breakfast2;
