import { useCallback } from "react";
import styles from "./ContinueWithFacebookLeft.module.css";

const ContinueWithFacebookLeft = () => {
  const onContinueWithFacebookLeftClick = useCallback(() => {
    window.open("https://www.facebook.com/profile.php?id=100008734368411");
  }, []);

  return (
    <div
      className={styles.continueWithFacebookLeft}
      onClick={onContinueWithFacebookLeftClick}
    >
      <img
        className={styles.facebookLogoIcon}
        alt=""
        src="/facebook-logo.svg"
      />
      <b className={styles.continueWithFacebook}>Continue with Facebook</b>
    </div>
  );
};

export default ContinueWithFacebookLeft;
