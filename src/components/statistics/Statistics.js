import React from "react";
import PropTypes from "prop-types";
import StatisticsList from "./statistics-list/StatisticsList";
import styles from "./Statistics.module.css";

const Satistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <StatisticsList stats={stats} />
  </section>
);

Satistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Satistics;
