import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const navClasses = ({ isActive }) => {
  return isActive ? styles.active : "";
};

const Navigation = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationLogo}>
          <NavLink to="/" className={styles.navigationLogoLink}>
            Travel<span className={styles.navigationIcon}>Trucks</span>
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink to="/" className={navClasses}>
            Home
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink to="/catalog" className={navClasses}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
