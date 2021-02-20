import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { clearConfigCache } from 'prettier';

function randomColor() {
  let colorCode =
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')';
  return colorCode;
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.stat_list}>
      {stats.map(stat => (
        <li
          className={styles.stat_item}
          key={stat.id}
          style={{ backgroundColor: randomColor() }}
        >
          <span className={styles.stat_label}>{stat.label}</span>
          <span className={styles.stat_percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
