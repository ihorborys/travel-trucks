import styles from "./VehicleType.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setVehicleType } from "../../redux/filtersSlice.js";
import { TYPES } from "../../../utils/constants.js";

const VehicleType = () => {
  const selectedType = useSelector((state) => state.filters.vehicleType);
  const dispatch = useDispatch();

  const handleClickTypes = (name) => {
    dispatch(setVehicleType(name));
  };
  console.log(selectedType);

  return (
    <div className={styles.catalogFiltersType}>
      <h3 className={styles.titleType}>Vehicle type</h3>
      <div className={styles.typeList}>
        {TYPES.map((type) => {
          return (
            <button
              key={type.id}
              type={"button"}
              className={styles.typeItem}
              onClick={() => handleClickTypes(type.name)}
            >
              <svg className={styles.typeIcon} width={32} height={32}>
                <use href={type.icon}></use>
              </svg>
              <span className={styles.typeName}>{type.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleType;
