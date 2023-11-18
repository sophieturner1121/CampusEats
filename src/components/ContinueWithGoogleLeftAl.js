import styles from "./ContinueWithGoogleLeftAl.module.css";

const ContinueWithGoogleLeftAl = () => {
  return (
    <div className={styles.continueWithGoogleLeftAl}>
      <img className={styles.googleLogoIcon} alt="" src="/google-logo.svg" />
      <div className={styles.continueWithGoogle}>Continue with Google</div>
    </div>
  );
};

export default ContinueWithGoogleLeftAl;
