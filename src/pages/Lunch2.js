import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Lunch2.module.css";

const Lunch2 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/menu-nonuser");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/breakfast2");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/breakfast2");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/lunch2");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/snacks2");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/snacks2");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/drinks2");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/drinks2");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.lunch2}>
      <div className={styles.lunch2Child} />
      <div className={styles.porksteak}>Porksteak</div>
      <div className={styles.div}>₱50.00</div>
      <div className={styles.siIdleKay}>si idle kay baboy og genshin</div>
      <img className={styles.image77Icon} alt="" src="/image-77@2x.png" />
      <div className={styles.lunch2Item} />
      <div className={styles.friedChicken1pc}>Fried Chicken (1pc)</div>
      <div className={styles.div1}>₱20.00</div>
      <div className={styles.siIdleKay1}>si idle kay baboy og genshin</div>
      <img className={styles.image111Icon} alt="" src="/image-1111@2x.png" />
      <div className={styles.lunch2Inner} />
      <div className={styles.citUCafeteria}>CIT-U CAFETERIA</div>
      <div className={styles.palabok}>Palabok</div>
      <div className={styles.div2}>₱40.00</div>
      <div className={styles.lamehNgaPalabok}>Lameh nga palabok</div>
      <img className={styles.image67Icon} alt="" src="/image-67@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.batchoy}>Batchoy</div>
      <div className={styles.div3}>₱40.00</div>
      <div className={styles.masHotPa}>mas hot pa ni idle</div>
      <img className={styles.image63Icon} alt="" src="/image-63@2x.png" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.all}>All</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.searchMealHere}>Search Meal Here</div>
      </div>
      <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer2Click}
      >
        <div className={styles.groupInner} onClick={onRectangle6Click} />
        <div className={styles.breakfast}>Breakfast</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupInner} onClick={onRectangle7Click} />
        <div className={styles.lunch}>Lunch</div>
      </div>
      <div className={styles.rectangleParent1} onClick={onGroupContainer4Click}>
        <div className={styles.groupInner} onClick={onRectangle8Click} />
        <div className={styles.snacks}>Snacks</div>
      </div>
      <div className={styles.rectangleParent2} onClick={onGroupContainer5Click}>
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

export default Lunch2;
