import { useCallback, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import styles from "./LogIn.module.css";
import { useNavigate } from 'react-router-dom';

const LogIn = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const onGroupButtonClick = useCallback(async () => {
    setErrorMessage(""); // Reset the error message
    try {
      const response = await fetch("http://localhost:8080/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const userData = await response.json();
        login(userData); // Update the auth state with user data
        console.log("Login successful with data:", userData);
        navigate('/menu'); // Navigate after successful login
        onClose(); // Call onClose at last if it's used for cleanup
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed");
      }
    } catch (error) {
      setErrorMessage(`Network error: ${error.message}`);
    }
  }, [email, password, login, navigate, onClose]);
  return (
    <div className={styles.logIn}>
      <div className={styles.logInParent}>
        <div className={styles.logIn1}>Log in</div>
        <div className={styles.rectangleWrapper}>
          <input
            className={styles.groupChild}
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.rectangleContainer}>
          <input
            className={styles.groupChild}
            name="password"
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        <div className={styles.forgotYourPassword}>Forgot your Password?</div>
        <button className={styles.frame} onClick={onClose}>
          <img
            className={styles.svgrepoIconcarrier}
            alt=""
            src="/svgrepo-iconcarrier.svg"
          />
        </button>
        <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
          <div className={styles.groupInner} />
          <div className={styles.signIn}>Sign in</div>
        </button>
        <input className={styles.rectangleInput} type="checkbox" />
        <div className={styles.rememberMe}>Remember me</div>
      </div>
    </div>
  );
};

export default LogIn;
