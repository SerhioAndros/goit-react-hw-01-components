import React from "react";
import PropTypes from "prop-types";

const StatisticsList = ({ stats }) => (
  <ul className="stat-list">
    {stats.map((stat) => (
      <li className="item" key={stat.id}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}</span>
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
