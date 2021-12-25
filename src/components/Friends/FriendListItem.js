import css from "./Friends.module.css";
import PropTypes from "prop-types";

export function FriendListItem({ avatar, name, isOnline }) {
  const statusSpanClasses = [css.status];
  isOnline
    ? statusSpanClasses.push(css.online)
    : statusSpanClasses.push(css.offline);

  return (
    <li className={css.item}>
      <span className={statusSpanClasses.join(" ")}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
