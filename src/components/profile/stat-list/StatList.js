import React from "react";
import PropTypes from "prop-types";
import "./StatList.css";

const StatList = ({ stats }) => (
  <ul className="profile-stats-list">
    <li className="profile-stats-item">
      <span className="profile-stats-label">Followers </span>
      <span className="profile-stats-quantity">{stats.followers}</span>
    </li>
    <li className="profile-stats-item">
      <span className="profile-stats-label">Views </span>
      <span className="profile-stats-quantity">{stats.views}</span>
    </li>
    <li className="profile-stats-item">
      <span className="profile-stats-label">Likes </span>
      <span className="profile-stats-quantity">{stats.likes}</span>
    </li>
  </ul>
);
StatList.propTypes = {
  stats: PropTypes.object.isRequired,
};
export default StatList;
