import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Drinks2.module.css";

const Drinks2 = () => {
  const navigate = useNavigate();

  const onDrinks2ContainerClick = useCallback(() => {
    // Please sync "Menu" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/menu-nonuser");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/breakfast2");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/breakfast2");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/lunch2");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/lunch2");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/snacks2");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/snacks2");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/drinks2");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.drinks2} onClick={onDrinks2ContainerClick}>
      <div className={styles.drinks2Child} />
      <div className={styles.water}>Water</div>
      <div className={styles.div}>₱15.00</div>
      <div className={styles.masRefreshingKaysa}>
        mas refreshing kaysa ni bff
      </div>
      <img className={styles.image109Icon} alt="" src="/image-109@2x.png" />
      <div className={styles.citUCafeteria}>CIT-U CAFETERIA</div>
      <div className={styles.drinks2Item} />
      <div className={styles.coke}>Coke</div>
      <div className={styles.div1}>₱30.00</div>
      <div className={styles.masLamiPa}>mas lami pa ni bff</div>
      <img className={styles.image75Icon} alt="" src="/image-75@2x.png" />
      <div className={styles.drinks2Inner} />
      <div className={styles.mtDew}>Mt. Dew</div>
      <div className={styles.div2}>₱30.00</div>
      <div className={styles.masLamiPa1}>mas lami pa ni bff</div>
      <img className={styles.image113Icon} alt="" src="/image-1131@2x.png" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.all}>All</div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.searchMealHere}>Search Meal Here</div>
      <img className={styles.image10Icon} alt="" src="/image-103@2x.png" />
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} onClick={onRectangle5Click} />
        <div className={styles.breakfast}>Breakfast</div>
      </div>
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer2Click}
      >
        <div className={styles.groupItem} onClick={onRectangle6Click} />
        <div className={styles.lunch}>Lunch</div>
      </div>
      <div className={styles.groupDiv} onClick={onGroupContainer3Click}>
        <div className={styles.groupItem} onClick={onRectangle7Click} />
        <div className={styles.snacks}>Snacks</div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupItem} onClick={onRectangle8Click} />
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

export default Drinks2;
