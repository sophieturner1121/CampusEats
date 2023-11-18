import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Snacks2.module.css";

const Snacks2 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/menu-nonuser");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/breakfast2");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/breakfast2");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/lunch2");
  }, [navigate]);

  const onRectangle10Click = useCallback(() => {
    navigate("/lunch2");
  }, [navigate]);

  const onRectangle11Click = useCallback(() => {
    navigate("/snacks2");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/drinks2");
  }, [navigate]);

  const onRectangle12Click = useCallback(() => {
    navigate("/drinks2");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.snacks2}>
      <div className={styles.snacks2Child} />
      <div className={styles.bingo}>Bingo</div>
      <div className={styles.div}>₱11.00</div>
      <div className={styles.masSweetPa}>mas sweet pa ni bff</div>
      <img className={styles.image73Icon} alt="" src="/image-73@2x.png" />
      <div className={styles.citUCafeteria}>CIT-U CAFETERIA</div>
      <div className={styles.snacks2Item} />
      <div className={styles.meatroll}>Meatroll</div>
      <div className={styles.div1}>₱15.00</div>
      <div className={styles.soMeatty}>so meatty</div>
      <img className={styles.image72Icon} alt="" src="/image-72@2x.png" />
      <div className={styles.snacks2Inner} />
      <div className={styles.chocolateStick}>Chocolate Stick</div>
      <div className={styles.div2}>₱12.00</div>
      <div className={styles.masColdPa}>mas cold pa kaysa ni bff</div>
      <img className={styles.image116Icon} alt="" src="/image-76@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.hotdogWBun}>Hotdog w/ Bun</div>
      <div className={styles.div3}>₱25.00</div>
      <div className={styles.masHotPa}>mas hot pa ni idle</div>
      <img className={styles.image110Icon} alt="" src="/image-1102@2x.png" />
      <div className={styles.snacks2Child1} />
      <div className={styles.pinipig}>Pinipig</div>
      <div className={styles.div4}>₱25.00</div>
      <div className={styles.masColdPa1}>mas cold pa kaysa ni bff</div>
      <img className={styles.image112Icon} alt="" src="/image-1121@2x.png" />
      <div className={styles.snacks2Child2} />
      <div className={styles.magicCreams}>Magic Creams</div>
      <div className={styles.div5}>₱11.00</div>
      <div className={styles.masSweetPa1}>mas sweet pa ni bff</div>
      <img className={styles.image114Icon} alt="" src="/image-1141@2x.png" />
      <div className={styles.snacks2Child3} />
      <div className={styles.fita}>Fita</div>
      <div className={styles.div6}>₱11.00</div>
      <div className={styles.masRefreshingKaysa}>
        mas refreshing kaysa ni bff
      </div>
      <img className={styles.image115Icon} alt="" src="/image-115@2x.png" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.all}>All</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.searchMealHere}>Search Meal Here</div>
      </div>
      <img className={styles.image10Icon} alt="" src="/image-103@2x.png" />
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer2Click}
      >
        <div className={styles.groupInner} onClick={onRectangle9Click} />
        <div className={styles.breakfast}>Breakfast</div>
      </div>
      <div className={styles.groupDiv} onClick={onGroupContainer3Click}>
        <div className={styles.groupInner} onClick={onRectangle10Click} />
        <div className={styles.lunch}>Lunch</div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupInner} onClick={onRectangle11Click} />
        <div className={styles.snacks}>Snacks</div>
      </div>
      <div className={styles.rectangleParent2} onClick={onGroupContainer5Click}>
        <div className={styles.groupInner} onClick={onRectangle12Click} />
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

export default Snacks2;
