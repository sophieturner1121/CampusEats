import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DownloadCampusEatsContainer from "../components/DownloadCampusEatsContainer";
import Header from "../components/Header";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/menu-nonuser");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/menu-nonuser");
  }, [navigate]);

  const onImage105IconClick = useCallback(() => {
    window.open("https://www.facebook.com/profile.php?id=100008734368411");
  }, []);

  const onImage106IconClick = useCallback(() => {
    window.open("https://www.tiktok.com/@itfitzonyou?lang=en");
  }, []);

  return (
    <div className={styles.landingPage}>
      <img className={styles.landingPageChild} alt="" src="/rectangle-7.svg" />
      <img
        className={styles.catLogoOnWhiteBackgroundVIcon}
        alt=""
        src="/catlogoonwhitebackgroundvector26493199-1@2x.png"
      />
      <img className={styles.image110Icon} alt="" src="/image-110@2x.png" />
      <img
        className={styles.skipTheLineSecureYourTim}
        alt=""
        src="/skip-the-line-secure-your-time-campuseats-fueling-your-campus-life.svg"
      />
      <button className={styles.vectorParent} onClick={onFrameButtonClick}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-12.svg"
          onClick={onRectangle1Click}
        />
        <img className={styles.orderNowIcon} alt="" src="/order-now.svg" />
      </button>
      <img className={styles.image78Icon} alt="" src="/image-78@2x.png" />
      <div className={styles.weAreThrilledContainer}>
        <span className={styles.weAreThrilledContainer1}>
          <span>{`We are thrilled to introduce `}</span>
          <b className={styles.campuseats}>CampusEats</b>
          <span>
            {" "}
            in Cebu Institute of Technology University (CIT-U), offering the
            students and staff a seamless and efficient way to order and enjoy a
            diverse range of delicious meals right here on campus.
          </span>
        </span>
      </div>
      <div className={styles.followUs}>
        <div className={styles.aboutUs}>About Us</div>
        <div className={styles.followUsOn}>Follow us on</div>
        <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
        <img className={styles.image104Icon} alt="" src="/image-104@2x.png" />
        <img
          className={styles.image105Icon}
          alt=""
          src="/image-105@2x.png"
          onClick={onImage105IconClick}
        />
        <img
          className={styles.image106Icon}
          alt=""
          src="/image-106@2x.png"
          onClick={onImage106IconClick}
        />
      </div>
      <DownloadCampusEatsContainer />
      <div className={styles.earnPoints}>
        <img
          className={styles.earnPointsChild}
          alt=""
          src="/rectangle-36.svg"
        />
        <b className={styles.earnPointsWith}>
          Earn points with every tap like a pro, claim rewards like a boss!
        </b>
        <img className={styles.image101Icon} alt="" src="/image-101@2x.png" />
        <img className={styles.image102Icon} alt="" src="/image-102@2x.png" />
      </div>
      <Header />
    </div>
  );
};

export default LandingPage;
