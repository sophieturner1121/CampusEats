import { useState, useCallback } from "react";
import LogInSignUp from "./LogInSignUp";
import PortalPopup from "./PortalPopup";
import styles from "./Header.module.css";

const Header = () => {
  const [isLogInSignUpOpen, setLogInSignUpOpen] = useState(false);
  const [isLogInSignUp1Open, setLogInSignUp1Open] = useState(false);
  const [isLogInSignUp2Open, setLogInSignUp2Open] = useState(false);
  const [isLogInSignUp3Open, setLogInSignUp3Open] = useState(false);

  const openLogInSignUp1 = useCallback(() => {
    setLogInSignUp1Open(true);
  }, []);

  const closeLogInSignUp1 = useCallback(() => {
    setLogInSignUp1Open(false);
  }, []);

  const openLogInSignUp = useCallback(() => {
    setLogInSignUpOpen(true);
  }, []);

  const closeLogInSignUp = useCallback(() => {
    setLogInSignUpOpen(false);
  }, []);

  const openLogInSignUp3 = useCallback(() => {
    setLogInSignUp3Open(true);
  }, []);

  const closeLogInSignUp3 = useCallback(() => {
    setLogInSignUp3Open(false);
  }, []);

  const openLogInSignUp2 = useCallback(() => {
    setLogInSignUp2Open(true);
  }, []);

  const closeLogInSignUp2 = useCallback(() => {
    setLogInSignUp2Open(false);
  }, []);

  return (
    <>
      <div className={styles.navbar}>
        <img className={styles.navbarChild} alt="" src="/rectangle-1.svg" />
        <button
          className={styles.rectangle14StrokeParent}
          onClick={openLogInSignUp1}
        >
          <img
            className={styles.rectangle14Stroke}
            alt=""
            src="/rectangle-14-stroke.svg"
            onClick={openLogInSignUp}
          />
          <img className={styles.signUpIcon} alt="" src="/sign-up.svg" />
        </button>
        <img className={styles.campuseatsIcon} alt="" src="/campuseats.svg" />
        <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
        <button
          className={styles.rectangle13StrokeParent}
          onClick={openLogInSignUp3}
        >
          <img
            className={styles.rectangle14Stroke}
            alt=""
            src="/rectangle-14-stroke.svg"
            onClick={openLogInSignUp2}
          />
          <img className={styles.logInIcon} alt="" src="/log-in.svg" />
        </button>
      </div>
      {isLogInSignUp1Open && (
        <PortalPopup placement="Centered" onOutsideClick={closeLogInSignUp1}>
          <LogInSignUp onClose={closeLogInSignUp1} />
        </PortalPopup>
      )}
      {isLogInSignUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogInSignUp}
        >
          <LogInSignUp onClose={closeLogInSignUp} />
        </PortalPopup>
      )}
      {isLogInSignUp3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogInSignUp3}
        >
          <LogInSignUp onClose={closeLogInSignUp3} />
        </PortalPopup>
      )}
      {isLogInSignUp2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogInSignUp2}
        >
          <LogInSignUp onClose={closeLogInSignUp2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
