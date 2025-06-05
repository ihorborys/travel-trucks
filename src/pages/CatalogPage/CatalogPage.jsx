// import { Field, Form, Formik } from "formik";
// import { useEffect, useState } from "react";
// import { getMovies } from "../../api/api.js";
import styles from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
// import { useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
import Filters from "../../components/Filters/Filters.jsx";
// import errorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

const CatalogPage = () => {
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  //
  // useEffect(() => {
  //   if (!searchParams.size) return;
  //
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       setErrorMessage("");
  //
  //       const data = await getMovies(searchParams.get("query"));
  //       if (data.results.length === 0)
  //         setErrorMessage("Sorry, can't find anything...");
  //
  //       setMovies(data.results);
  //     } catch (error) {
  //       setErrorMessage(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [searchParams]);
  //
  // const handleSubmit = (values) => {
  //   if (!values.query) {
  //     setMovies([]);
  //     setErrorMessage("Please, enter a search query");
  //     setSearchParams({});
  //     return;
  //   }
  //
  //   if (values.query.trim().length > 0) searchParams.set("query", values.query);
  //   setSearchParams(searchParams);
  // };

  return (
    <div className={styles.catalogPageWrapper}>
      <section className={styles.catalogFilters}>
        <Filters />
        <Button>View Now</Button>
      </section>
      <section className={styles.catalogList}>
        <CampersList />
      </section>
      {/*{<Loader />}*/}
      {/*{errorMessage && <ErrorMessage errorMessage={errorMessage} />}*/}
    </div>
  );
};

export default CatalogPage;
