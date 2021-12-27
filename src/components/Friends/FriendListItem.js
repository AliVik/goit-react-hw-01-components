import css from "./Friends.module.css";
import PropTypes from "prop-types";

export function FriendListItem({
  avatar = "https://as2.ftcdn.net/v2/jpg/03/08/68/19/1000_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg",
  name,
  isOnline,
}) {
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
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
