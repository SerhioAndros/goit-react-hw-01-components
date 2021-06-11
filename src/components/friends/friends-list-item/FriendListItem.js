import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../../images/defaultImg.jpg";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ name, isOnline, avatar }) => (
  <li className={styles.item}>
    {isOnline ? (
      <span className={styles.status} style={{ color: "green" }}>
        Online
      </span>
    ) : (
      <span className={styles.status} style={{ color: "red" }}>
        Offline
      </span>
    )}
    <img
      className={styles.avatar}
      src={avatar}
      alt={`Avatar of ${name}`}
      width="48"
    />
    <p className={styles.name}>{name}</p>
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
