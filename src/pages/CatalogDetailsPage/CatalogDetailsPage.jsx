import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "./CatalogDetailsPage.module.css";
import CatalogDetailsPageNav from "../../components/Navigation/CatalogDetailsPageNav/CatalogDetailsPageNav.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import { getSelectedCamper } from "../../components/redux/campersOps.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCamper,
  selectError,
  selectLoading,
} from "../../components/redux/campersSlice.js";
import { nanoid } from "nanoid";

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
    <div className={styles.catalogDetailsContainer}>
      {/*<button className={styles.buttonBack} onClick={handleClick}>*/}
      {/*  Go Back*/}
      {/*</button>*/}

      {camper && (
        <div className={styles.camperDetailsWrapper}>
          <h2 className={styles.name}>
            {camper.name.length < 26
              ? camper.name
              : camper.name.substring(0, 26) + "..."}
          </h2>
          <ul className={styles.ratingLocationWrapper}>
            <svg className={styles.favoritex} width={16} height={16}>
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
          <ul className={styles.camperInfoImageList}>
            {camper.gallery.map((item) => (
              <li key={nanoid()} className={styles.camperInfoImageItem}>
                <img
                  className={styles.image}
                  src={item.original}
                  width={292}
                  height={312}
                  alt="Camper image"
                />
              </li>
            ))}
          </ul>
          <ul className={styles.descriptionWrapper}>
            <li className={styles.description}>{camper.description}</li>
          </ul>
          <div className={styles.equipmentsListContainer}>
            <CatalogDetailsPageNav />
            <Outlet />
          </div>
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
