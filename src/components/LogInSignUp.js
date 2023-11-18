import { useState, useCallback } from "react";
import SignupF from "./SignupF";
import PortalPopup from "./PortalPopup";
import LogIn from "./LogIn";
import ContinueWithFacebookLeft from "./ContinueWithFacebookLeft";
import ContinueWithGoogleLeftAl from "./ContinueWithGoogleLeftAl";
import ContinueWithAppleLeftAli from "./ContinueWithAppleLeftAli";
import styles from "./LogInSignUp.module.css";

const LogInSignUp = ({ onClose }) => {
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);
  const [isLogInPopupOpen, setLogInPopupOpen] = useState(false);

  const openSignupPopup = useCallback(() => {
    setSignupPopupOpen(true);
  }, []);

  const closeSignupPopup = useCallback(() => {
    setSignupPopupOpen(false);
  }, []);

  const openLogInPopup = useCallback(() => {
    setLogInPopupOpen(true);
  }, []);

  const closeLogInPopup = useCallback(() => {
    setLogInPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.logInSignUp}>
        <div className={styles.signUpOr}>Sign up or Log in to continue</div>
        <div className={styles.or}>or</div>
        <div className={styles.welcomeToCampuseats}>Welcome to CampusEats!</div>
        <ContinueWithFacebookLeft />
        <ContinueWithGoogleLeftAl />
        <ContinueWithAppleLeftAli />
        <button className={styles.rectangleParent} onClick={openSignupPopup}>
          <div className={styles.groupChild} />
          <div className={styles.signUp}>Sign up</div>
        </button>
        <button className={styles.rectangleGroup} onClick={openLogInPopup}>
          <div className={styles.groupItem} />
          <div className={styles.logIn}>Log in</div>
        </button>
        <img
          className={styles.frameIcon}
          alt=""
          src="/frame.svg"
          onClick={onClose}
        />
      </div>
      {isSignupPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignupPopup}
        >
          <SignupF onClose={closeSignupPopup} />
        </PortalPopup>
      )}
      {isLogInPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.5)"
          placement="Centered"
          onOutsideClick={closeLogInPopup}
        >
          <LogIn onClose={closeLogInPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default LogInSignUp;
