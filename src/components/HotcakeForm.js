import styles from "./HotcakeForm.module.css";

const HotcakeForm = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.hotcake}>Hotcake</div>
      <div className={styles.div}>₱10.00</div>
      <div className={styles.masHotPa}>mas hot pa sa pinas</div>
      <img className={styles.image65Icon} alt="" src="/image-65@2x.png" />
      <img className={styles.image65Icon} alt="" src="/image-65@2x.png" />
    </div>
  );
};

export default HotcakeForm;
