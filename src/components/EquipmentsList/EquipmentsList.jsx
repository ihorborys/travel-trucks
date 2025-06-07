import styles from "./EquipmentsList.module.css";

const EquipmentsList = ({ camper }) => {
  const equipments = [
    {
      id: 1,
      name: "AC",
      icon: "./icons.svg#icon-wind_20",
    },
    {
      id: 2,
      name: "TV",
      icon: "./icons.svg#icon-tv_32",
    },
    {
      id: 3,
      name: "bathroom",
      icon: "./icons.svg#icon-ph_shower_20",
    },
    {
      id: 4,
      name: "gas",
      icon: "./icons.svg#icon-gas",
    },
    {
      id: 5,
      name: "kitchen",
      icon: "./icons.svg#icon-kitchen_20",
    },
    {
      id: 6,
      name: "microwave",
      icon: "./icons.svg#icon-microwave",
    },
    {
      id: 7,
      name: "radio",
      icon: "./icons.svg#icon-ui-radios_20",
    },
    {
      id: 8,
      name: "refrigerator",
      icon: "./icons.svg#icon-solar_fridge-outline_20",
    },
    {
      id: 9,
      name: "water",
      icon: "./icons.svg#icon-water",
    },
    {
      id: 10,
      name: "transmission",
      icon: "./icons.svg#icon-diagram_20",
    },
    {
      id: 11,
      name: "engine",
      icon: "./icons.svg#icon-petrol_20",
    },
  ];

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
