import styles from "./Filters.module.css";
import { EQUIPMENTS } from "../../utils/constants.js";
import Button from "../Button/Button.jsx";
import VehicleType from "./VehicleType/VehicleType.jsx";
import LocationFilter from "./Location/Location.jsx";
// import { selectEquipment } from "../redux/filtersSlice.js";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCampers, fetchFilteredCampers } from "../redux/campersOps.js";
// import { selectCurrentPage, selectLimit } from "../redux/campersSlice.js";

const Filters = () => {
  // const equipmentArr = useSelector(selectEquipment);
  // const params = new URLSearchParams();

  // const dispatch = useDispatch;
  // const currentPage = useSelector(selectCurrentPage);
  // const limit = useSelector(selectLimit);
  //
  // const searchFilteredCampers = () => dispatch(fetchFilteredCampers());
  //
  // const addFilterQuery = () => {
  //   console.log("addFilterQuery");
  //   params.append("AC", "true");
  //   console.log("params", params.toString());
  // };

  // const fetchFilteredCampers = () => {
  //   dispatch(fetchCampers({ page: currentPage, limit }));
  // };

  // const campers = useSelector(selectCampers);

  return (
    <div className={styles.catalogFiltersContainer}>
      <LocationFilter />
      {/*<div className={styles.catalogFiltersLocation}>*/}
      {/*  <h3 className={styles.titleLocation}>Location</h3>*/}
      {/*  <div className={styles.catalogFiltersLocationItem}>*/}
      {/*    <svg className={styles.iconLocation} width={20} height={20}>*/}
      {/*      <use href="./icons.svg#icon-map_active"></use>*/}
      {/*    </svg>*/}
      {/*    <span>Kyiv, Ukraine</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <h3 className={styles.titleFiltersEquipment}>Filters</h3>
      <div className={styles.catalogFiltersEquipment}>
        <h3 className={styles.titleEquipment}>Vehicle equipment</h3>
        <ul className={styles.equipmentList}>
          {EQUIPMENTS.map((equipment) => {
            return (
              <li
                key={equipment.id}
                className={styles.equipmentItem}
                onClick={"addFilterQuery"}
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
      <VehicleType />
      {/*<div className={styles.catalogFiltersType}>*/}
      {/*  <h3 className={styles.titleType}>Vehicle type</h3>*/}
      {/*  <div className={styles.typeList}>*/}
      {/*    {FORMS.map((form) => {*/}
      {/*      return (*/}
      {/*        <button*/}
      {/*          key={form.id}*/}
      {/*          type={"button"}*/}
      {/*          className={styles.equipmentItem}*/}
      {/*          onClick={() => handleClickForm(form.name)}*/}
      {/*        >*/}
      {/*          <svg className={styles.equipmentIcon} width={32} height={32}>*/}
      {/*            <use href={form.icon}></use>*/}
      {/*          </svg>*/}
      {/*          <span className={styles.equipmentName}>{form.name}</span>*/}
      {/*        </button>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Button
        handleOnClick={"fetchFilteredCampers"}
        className={styles.searchBtn}
      >
        Search
      </Button>
      {/*<button onClick={"searchFilteredCampers()"}>Search</button>*/}
    </div>
  );
};
export default Filters;
