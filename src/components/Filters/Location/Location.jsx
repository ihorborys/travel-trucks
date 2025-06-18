import { useDispatch, useSelector } from "react-redux";
import { LOCATIONS } from "../../../utils/constants.js";
import { setLocation } from "../../redux/filtersSlice.js";
import styles from "../Filters.module.css";

const LocationFilter = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.filters.location);

  const handleChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  return (
    // <div className={styles.catalogFiltersLocation}>
    //     <h3 className={styles.titleLocation}>Location</h3>
    //     <div className={styles.catalogFiltersLocationItem}>
    //         <svg className={styles.iconLocation} width={20} height={20}>
    //             <use href="./icons.svg#icon-map_active"></use>
    //         </svg>
    //         <span>Kyiv, Ukraine</span>
    //     </div>
    // </div>

    <div style={{ marginBottom: "16px" }}>
      <label htmlFor="location-select">Location:</label>
      <select
        id="location-select"
        value={selected}
        onChange={handleChange}
        style={{
          padding: "8px",
          borderRadius: "6px",
          marginLeft: "10px",
        }}
      >
        <option value="">-- Choose a city --</option>
        {LOCATIONS.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationFilter;
