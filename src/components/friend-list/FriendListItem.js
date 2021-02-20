import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../silhouette-avatar.png';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnLine }) => (
  <li className={styles.friendListItem}>
    <span className={isOnLine ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnLine: PropTypes.bool.isRequired,
};

export default FriendListItem;
