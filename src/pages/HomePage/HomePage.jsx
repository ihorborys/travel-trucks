import styles from "./HomePage.module.css";
// import heroWebp from "../../assets/img/hero.webp";
// import heroWebp2x from "../../assets/img/hero@2x.webp";
// import heroPng from "../../assets/img/hero.png";
// import heroPng2x from "../../assets/img/hero@2x.png";

const HomePage = () => {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.heroContainer}>
        {/*<picture>*/}
        {/*  <source*/}
        {/*    srcSet={`${heroWebp} 1x, ${heroWebp2x} 2x`}*/}
        {/*    type="image/webp"*/}
        {/*  />*/}
        {/*  <source srcSet={`${heroPng} 1x, ${heroPng2x} 2x`} type="image/png" />*/}
        {/*  <img*/}
        {/*    src={heroPng}*/}
        {/*    alt="Women in sportswear"*/}
        {/*    className="hero__image-pic"*/}
        {/*  />*/}
        {/*</picture>*/}

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Campers of your dreams</h1>
          <h3 className={styles.heroSubTitle}>
            You can find everything you want in our catalog
          </h3>
          <button className={styles.heroButton}>View Now</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
