import styles from "./Filters.module.css";
import { equipments } from "../../utils/constants.js";

const Filters = () => {
  const handleclick = (event) => {
    console.log(event.target);
  };
  // const campers = useSelector(selectCampers);

  return (
    <div className={styles.catalogFiltersContainer}>
      <ul className={styles.catalogFiltersLocation}>
        <h3 className={styles.titleLocation}>Location</h3>
        <li className={styles.catalogFiltersLocationItem}>
          <svg className={styles.iconLocation} width={20} height={20}>
            <use href="./icons.svg#icon-map_active"></use>
          </svg>
          <span>Kyiv, Ukraine</span>
        </li>
      </ul>
      <h3 className={styles.titleFilters}>Filters</h3>
      <ul className={styles.catalogFiltersEquipment}>
        <h3 className={styles.titleEquipment}>Vehicle equipment</h3>
        <ul className={styles.equipmentList}>
          {equipments.map((equipment) => {
            return (
              <li
                key={equipment.id}
                className={styles.equipmentItem}
                onClick={handleclick}
              >
                <svg className={styles.equipmentIcon} width={32} height={32}>
                  <use href={equipment.icon}></use>
                </svg>
                <span className={styles.equipmentName}>{equipment.name}</span>
              </li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};
export default Filters;
