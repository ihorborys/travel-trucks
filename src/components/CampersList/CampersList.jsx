import styles from "./CampersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../redux/campersOps.js";
import { selectCampers } from "../redux/campersSlice.js";
import Button from "../Button/Button.jsx";
import EquipmentsList from "../EquipmentsList/EquipmentsList.jsx";
import CamperInfoList from "../CamperInfoList/CamperInfoList.jsx";

const CampersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const campers = useSelector(selectCampers);

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
              <CamperInfoList camper={camper} />
              <EquipmentsList camper={camper} />
              <Button className={styles.showMoreBtn}>Show more</Button>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
