import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const navClasses = ({ isActive }) => {
  return isActive ? styles.active : "";
};

const Navigation = () => {
  return (
    <section className={styles.sectionNavigation}>
      <div className={styles.navigationContainer}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationLogo}>
            <NavLink to="/" className={styles.navigationLogoLink}>
              <svg className={styles.navigationIcon} width="136" height="16">
                <use href="/assets/icons/logo.svg"></use>
              </svg>
            </NavLink>
          </li>
          <li className={styles.navigationGroup}>
            <ul className={styles.navigationItemContainer}>
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
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navigation;
