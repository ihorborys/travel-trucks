import styles from "./Filters.module.css";
import { equipments, forms } from "../../utils/constants.js";
import Button from "../Button/Button.jsx";

const Filters = () => {
  const handleclick = (event) => {
    console.log(event.target);
  };
  // const campers = useSelector(selectCampers);

  return (
    <div className={styles.catalogFiltersContainer}>
      <div className={styles.catalogFiltersLocation}>
        <h3 className={styles.titleLocation}>Location</h3>
        <div className={styles.catalogFiltersLocationItem}>
          <svg className={styles.iconLocation} width={20} height={20}>
            <use href="./icons.svg#icon-map_active"></use>
          </svg>
          <span>Kyiv, Ukraine</span>
        </div>
      </div>
      <h3 className={styles.titleFilters}>Filters</h3>
      <div className={styles.catalogFiltersEquipment}>
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
      </div>
      <div className={styles.catalogFiltersType}>
        <h3 className={styles.titleType}>Vehicle type</h3>
        <ul className={styles.typeList}>
          {forms.map((form) => {
            return (
              <li
                key={form.id}
                className={styles.equipmentItem}
                onClick={handleclick}
              >
                <svg className={styles.equipmentIcon} width={32} height={32}>
                  <use href={form.icon}></use>
                </svg>
                <span className={styles.equipmentName}>{form.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <Button className={styles.searchBtn}>Search</Button>
    </div>
  );
};
export default Filters;
