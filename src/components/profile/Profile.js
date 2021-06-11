import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

import UserInfo from "./user-info/UserInfo";
import StatList from "./stat-list/StatList";

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className="profile-wrapper">
    <UserInfo avatar={avatar} name={name} tag={tag} location={location} />
    <StatList stats={stats} />
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
