import styles from "./Button.module.css";

const Button = ({ handleOnClick, children }) => {
  return (
    <button className={styles.heroButton} onClick={handleOnClick}>
      {children}
    </button>
  );
};
export default Button;
