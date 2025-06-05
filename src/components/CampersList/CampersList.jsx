import styles from "./CampersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../redux/campersOps.js";
import { selectCampers } from "../redux/campersSlice.js";
import { Link } from "react-router-dom";
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
          {camper.description}
          {/*<Link*/}
          {/*  to={`/catalog/${camper.id}`}*/}
          {/*  className={styles.link}*/}
          {/*  state={location}*/}
          {/*>*/}
          {/*<img*/}
          {/*  className={styles.image}*/}
          {/*  src={*/}
          {/*    camper.poster_path*/}
          {/*      ? `${profileUrl}${camper.poster_path}`*/}
          {/*      : defaultImg*/}
          {/*  }*/}
          {/*  width={185}*/}
          {/*  height={278}*/}
          {/*  alt="Movie poster image"*/}
          {/*/>*/}
          {/*<div className={styles.title}>{movie.original_title}</div>*/}
          {/*</Link>*/}
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
