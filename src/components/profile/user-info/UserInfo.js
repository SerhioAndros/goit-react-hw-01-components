import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../../images/defaultImg.jpg";
import "./UserInfo.css";

const UserInfo = ({ avatar, name, tag, location }) => (
  <div className="profile-description">
    <img
      src={avatar}
      alt={`Аватар пользователя ${name}`}
      className="profile-avatar"
    />
    <p className="profile-name">{name}</p>
    <p className="profile-tag">@{tag}</p>
    <p className="profile-location">{location}</p>
  </div>
);

UserInfo.defaultProps = {
  avatar: defaultImg,
};

UserInfo.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default UserInfo;
