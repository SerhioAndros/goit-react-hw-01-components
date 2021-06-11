import React from "react";
import PropTypes from "prop-types";
import styles from "./StatisticsList.module.css";

const colorRandomizer = function () {
  const randomColor = [];
  for (let j = 0; j < 3; j++) {
    randomColor.push(Math.floor(Math.random() * (200 - 50) + 50));
  }
  return randomColor;
};

const StatisticsList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map((stat) => (
      <li
        className={styles.item}
        key={stat.id}
        style={{ backgroundColor: `rgb(${colorRandomizer()})` }}
      >
        <span className={styles.label}>{stat.label}</span>
        <span className={styles.percentage}>{stat.percentage}%</span>
      </li>
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StatisticsList;
