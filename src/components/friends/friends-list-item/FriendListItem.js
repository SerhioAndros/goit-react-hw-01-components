import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../../images/defaultImg.jpg";

const FriendListItem = ({ name, isOnline, avatar }) => (
  <li className="item">
    {/* в спане нужно изменять цвет в зависимости от буля */}
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt={`Avatar of ${name}`} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImg,
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
};

export default FriendListItem;
