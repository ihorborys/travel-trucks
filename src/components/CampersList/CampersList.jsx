import styles from "./CampersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers, getSelectedCamper } from "../redux/campersOps.js";
import { selectCampers } from "../redux/campersSlice.js";
import Button from "../Button/Button.jsx";
import EquipmentsList from "../EquipmentsList/EquipmentsList.jsx";
import CamperInfoList from "../CamperInfoList/CamperInfoList.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CampersList = () => {
  // const location = useLocation();

  const campers = useSelector(selectCampers);
  const navigate = useNavigate();

  // const searchedCampers = useSelector(selectFilteredCampers);

  const handleClick = (id) => {
    navigate(`/catalog/${id}`);
  };

  console.log(campers);
  return (
    <ul className={styles.list}>
      {campers &&
        campers.map((camper) => (
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
              <li className={styles.camperInfoWrapper}>
                <CamperInfoList camper={camper} />
                <EquipmentsList camper={camper} />
                <Button handleOnClick={() => handleClick(camper.id)}>
                  Show more
                </Button>
              </li>
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default CampersList;
