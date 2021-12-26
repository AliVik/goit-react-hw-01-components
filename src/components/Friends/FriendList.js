import { FriendListItem } from "./FriendListItem";
import PropTypes from "prop-types";
import css from "./Friends.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
