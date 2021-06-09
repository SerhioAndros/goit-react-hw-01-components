import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./friends-list-item/FriendListItem";

const FriendsList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend) => (
      <FriendListItem
        key={friend.id}
        name={friend.name}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
      />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
    })
  ).isRequired,
};

export default FriendsList;
