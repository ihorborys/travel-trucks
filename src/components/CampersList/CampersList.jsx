import styles from "./CampersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../redux/campersOps.js";
import { selectCampers } from "../redux/campersSlice.js";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
// import { Link } from "react-router-dom";
// import { Link, useLocation } from "react-router-dom";
// import { defaultImg, profileUrl } from "../../api/api.js";

const CampersList = () => {
  // const location = useLocation();

  // const searchedCampers = useSelector(selectFilteredCampers);

  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const campers = useSelector(selectCampers);
  console.log(campers);

  return (
    <ul className={styles.list}>
      {campers.map((camper) => (
        <li key={camper.id} className={styles.item}>
          <ul className={styles.camperInfoContainer}>
            <li className={styles.camperInfoImage}>
              <img
                className={styles.image}
                src={camper.gallery[0].thumb}
                width={292}
                height={320}
                alt="Camper image"
              />
            </li>
            <li className={styles.camperInfoList}>
              <ul className={styles.namePriceFavoriteWrapper}>
                <h2 className={styles.name}>{camper.name}</h2>
                <div className={styles.priceFavorite}>
                  <li
                    className={styles.price}
                  >{`€${camper.price.toFixed(2)}`}</li>
                  <svg className={styles.favorite} width={26} height={24}>
                    <use href="./icons.svg#icon-favorite-default"></use>
                  </svg>
                </div>
              </ul>
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
              <ul className={styles.ratingLocationWrapper}>
                <li className={styles.icon}>Icon</li>
                <li className={styles.rating}>Rating</li>
                <li className={styles.location}>Location</li>
              </ul>
              <ul className={styles.ratingLocationWrapper}>
                <li className={styles.icon}>Icon</li>
                <li className={styles.rating}>Rating</li>
                <li className={styles.location}>Location</li>
              </ul>
              <Button>Show more</Button>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
