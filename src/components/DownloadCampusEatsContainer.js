import styles from "./DownloadCampusEatsContainer.module.css";

const DownloadCampusEatsContainer = () => {
  return (
    <div className={styles.downloadCampuseats}>
      <img
        className={styles.downloadCampuseatsChild}
        alt=""
        src="/rectangle-37.svg"
      />
      <b className={styles.downloadCampuseats1}>Download CampusEats</b>
      <div className={styles.getAheadOf}>
        Get ahead of the lunchtime rush with CampusEats, allowing you to
        effortlessly preorder delicious meals right from your school campus
        cafeteria.
      </div>
      <button className={styles.image103} />
      <img className={styles.image107Icon} alt="" src="/image-107@2x.png" />
      <button className={styles.image99} />
      <button className={styles.image100} />
    </div>
  );
};

export default DownloadCampusEatsContainer;
