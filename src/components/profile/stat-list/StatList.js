import React from "react";
import PropTypes from "prop-types";

const StatList = ({ stats }) => (
  <ul className="stats">
    <li>
      <span className="label">Followers </span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views </span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes </span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
);
StatList.propTypes = {
  stats: PropTypes.object.isRequired,
};
export default StatList;
