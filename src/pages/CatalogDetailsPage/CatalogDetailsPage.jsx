import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./CatalogDetailsPage.module.css";
import CatalogDetailsPageNav from "../../components/Navigation/CatalogDetailsPageNav/CatalogDetailsPageNav.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import CamperInfoList from "../../components/CamperInfoList/CamperInfoList.jsx";
import { getSelectedCamper } from "../../components/redux/campersOps.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCamper,
  selectError,
  selectLoading,
} from "../../components/redux/campersSlice.js";

export const CatalogDetailsPage = () => {
  const { camperId } = useParams();
  // const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedCamper(camperId));
  }, [dispatch, camperId]);

  // const backLink = useRef(location.state ?? "/catalog");
  //
  // const handleClick = () => {
  //   if (backLink.current) navigate(backLink.current);
  // };
  console.log(camper);
  return (
    <div className={styles.container}>
      {/*<button className={styles.buttonBack} onClick={handleClick}>*/}
      {/*  Go Back*/}
      {/*</button>*/}

      {camper && (
        <div className={styles.camperDetailsContainer}>
          <div className={styles.camperDetailsWrapper}>
            <h2 className={styles.name}>{camper.name}</h2>
            <ul className={styles.ratingLocationWrapper}>
              <svg className={styles.favorite} width={16} height={16}>
                <use href="./icons.svg#icon-rating-pressed"></use>
              </svg>
              <li className={styles.rating}>{camper.rating.toFixed(1)}</li>
              <li className={styles.reviews}>
                {`(${camper.reviews.length} Reviews)`}
              </li>
              <svg className={styles.map} width={16} height={16}>
                <use href="./icons.svg#icon-map_active"></use>
              </svg>
              <li className={styles.location}>{camper.location}</li>
            </ul>
            <div className={styles.price}>{`€${camper.price.toFixed(2)}`}</div>
            {camper &&
              camper.gallery.map((item) => (
                <li className={styles.camperInfoImage}>
                  <img
                    className={styles.image}
                    src={item.original}
                    width={292}
                    height={312}
                    alt="Camper image"
                  />
                </li>
              ))}
          </div>
          {/*<div className={styles.addInfo}>*/}
          {/*  <p className={styles.addInfoTitle}>Additional information</p>*/}
          <CatalogDetailsPageNav />
          {/*</div>*/}
          <Outlet />
        </div>
      )}
      {loading && <Loader />}
      {errorMessage && (
        <ErrorMessage errorMessage={errorMessage} clasName={styles.error} />
      )}
    </div>
  );
};

export default CatalogDetailsPage;
