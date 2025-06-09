import styles from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Button from "../../components/Button/Button.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../components/redux/campersOps.js";
// import { setPage } from "../redux/campersSlice";
import {
  selectCurrentPage,
  selectError,
  selectLimit,
  selectLoading,
} from "../../components/redux/campersSlice.js";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

const CatalogPage = () => {
  const currentPage = useSelector(selectCurrentPage);
  const limit = useSelector(selectLimit);

  const loading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

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
        {loading && <Loader />}
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      </div>
    </div>
  );
};

export default CatalogPage;
