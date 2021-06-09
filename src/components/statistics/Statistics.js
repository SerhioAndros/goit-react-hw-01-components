import React from "react";
import PropTypes from "prop-types";
import StatisticsList from "./statistics-list/StatisticsList";

const Satistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>

    <StatisticsList stats={stats} />
  </section>
);

Satistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Satistics;
