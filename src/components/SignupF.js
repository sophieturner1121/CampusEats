import { useCallback, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./SignupF.module.css";

const SignupF = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onGroupButtonClick = useCallback(async () => {
    setErrorMessage(""); // Reset error message
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match"); // Update error message
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/account/insertAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, userType: 0 }),
      });

      if (response.ok) {
          toast.success("Registration successful!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000});
      } else {
        const errorResponse = await response.json(); // Parse the response as JSON
        setErrorMessage(errorResponse.message || "Registration failed"); // Update error message
      }
    } catch (error) {
      setErrorMessage(`Network error: ${error.message}`); // Update error message for network errors
    }
  }, [email, password, confirmPassword, onClose]);

  // ... (rest of your component)

  return (
    <div className={styles.signup}>
      <div className={styles.signUpParent}>
        <div className={styles.signUp}>Sign up</div>
        <div className={styles.rectangleWrapper}>
          <input
            className={styles.groupChild}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.frame} onClick={onClose}>
          <img
            className={styles.svgrepoIconcarrier}
            alt=""
            src="/svgrepo-iconcarrier.svg"
          />
        </button>
        <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
          <div className={styles.groupInner} />
          <div className={styles.registerNow}>Register Now</div>
        </button>
        <div className={styles.rectangleFrame}>
          <input
            className={styles.groupChild}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default SignupF;
