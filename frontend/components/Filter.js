import styles from "./Filter.module.css";

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const Filter = ({ title, isActive, onClick }) => {
  return (
    <div
      className={styles.wrapper}
      onClick={onClick}
      style={{ backgroundColor: `${isActive ? "lavender" : "white"}` }}
    >
      <div
        className={styles.circle}
        style={{
          borderColor: `${
            title === "draft"
              ? "gold"
              : title === "rejected"
              ? "tomato"
              : "limegreen"
          }`,
        }}
      ></div>
      <h3 className={styles.title}>{capitalize(title)}</h3>
    </div>
  );
};
