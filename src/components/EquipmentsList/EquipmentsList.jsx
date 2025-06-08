import styles from "./EquipmentsList.module.css";
import { equipments } from "../../utils/constants.js";

const EquipmentsList = ({ camper }) => {
  return (
    <ul className={styles.equipmentsWrapper}>
      {equipments.map((equipment) => {
        if (camper[equipment.name]) {
          return (
            <li key={equipment.id} className={styles.equipments}>
              <svg className={styles.iconEquipments} width={20} height={20}>
                <use href={equipment.icon}></use>
              </svg>
              <span>
                {typeof camper[equipment.name] === "string"
                  ? camper[equipment.name]
                  : equipment.name}
              </span>
            </li>
          );
        }
      })}
    </ul>
  );
};
export default EquipmentsList;
