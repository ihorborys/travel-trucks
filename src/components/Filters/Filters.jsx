import styles from "./Filters.module.css";
import Button from "../Button/Button.jsx";
import VehicleType from "./VehicleType/VehicleType.jsx";
import LocationFilter from "./Location/Location.jsx";
import Equipment from "./Equipment/Equipment.jsx";

const Filters = () => {
  return (
    <div className={styles.catalogFiltersContainer}>
      <LocationFilter />
      <h3 className={styles.titleFiltersEquipment}>Filters</h3>
      <Equipment />
      <VehicleType />
      <Button
        handleOnClick={"fetchFilteredCampers"}
        className={styles.searchBtn}
      >
        Search
      </Button>
    </div>
  );
};
export default Filters;
