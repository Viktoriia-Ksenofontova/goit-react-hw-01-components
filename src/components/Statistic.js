import React from 'react';
import PropTypes from 'prop-types';
const Statistic = ({ followers, views, likes }) => (
  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
);

Statistic.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};


export default Statistic;