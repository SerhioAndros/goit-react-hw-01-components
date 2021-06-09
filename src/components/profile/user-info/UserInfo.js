import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../../images/defaultImg.jpg";

const UserInfo = ({ avatar, name, tag, location }) => (
  <div className="description">
    <img src={avatar} alt={`Аватар пользователя ${name}`} className="avatar" />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
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
