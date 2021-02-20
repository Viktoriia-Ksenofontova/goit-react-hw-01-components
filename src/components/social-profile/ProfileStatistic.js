import React from 'react';
import styles from './Profile.module.css';

const ProfileStatistic = ({ followers, views, likes }) => (
  <ul className={styles.stats}>
    <li className={styles.statsItem}>
      <span className={styles.statsLabel}>Followers</span>
      <span className={styles.statsQuantity}>{followers}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.statsLabel}>Views</span>
      <span className={styles.statsQuantity}>{views}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.statsLabel}>Likes</span>
      <span className={styles.statsQuantity}>{likes}</span>
    </li>
  </ul>
);

ProfileStatistic.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};

export default ProfileStatistic;
