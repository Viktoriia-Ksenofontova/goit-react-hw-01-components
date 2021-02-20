import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

import defaultImage from '../silhouette-avatar.png';
import ProfileStatistic from './ProfileStatistic';

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={styles.avatar}
        width="140"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ProfileStatistic
      followers={stats.followers}
      views={stats.views}
      likes={stats.likes}
    />
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
  location: '',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;
