import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div>
      <ul className={styles.catalogFiltersLocation}>
        <h3>Location</h3>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <ul className={styles.catalogFiltersEquipment}>
        <h3>Vehicle equipment</h3>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <ul className={styles.catalogFiltersType}>
        <h3>Location</h3>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );
};
export default Filters;
