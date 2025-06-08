import styles from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList.jsx";

import Button from "../../components/Button/Button.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../components/redux/campersOps.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={styles.catalogContainer}>
      <div className={styles.catalogPageWrapper}>
        <section className={styles.catalogFilters}>
          <Filters />
          <Button className={styles.searchBtn}>Search</Button>
        </section>
        <section className={styles.catalogList}>
          <CampersList />
        </section>
        {/*{<Loader />}*/}
        {/*{errorMessage && <ErrorMessage errorMessage={errorMessage} />}*/}
      </div>
    </div>
  );
};

export default CatalogPage;
