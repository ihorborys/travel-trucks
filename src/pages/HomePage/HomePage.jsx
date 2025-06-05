import styles from "./HomePage.module.css";
import Button from "../../components/Button/Button.jsx";
// import heroWebp from "../../assets/img/hero.webp";
// import heroWebp2x from "../../assets/img/hero@2x.webp";
// import heroPng from "../../assets/img/hero.png";
// import heroPng2x from "../../assets/img/hero@2x.png";

const HomePage = () => {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Campers of your dreams</h1>
          <h3 className={styles.heroSubTitle}>
            You can find everything you want in our catalog
          </h3>
          <Button>View Now</Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
