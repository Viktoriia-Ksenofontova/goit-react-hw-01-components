import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './silhouette-avatar.png';
import Statistic from './Statistic';

const Profile = ({ avatar, name, tag, location, stats }) => (
<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
        className="avatar"
        width="140"
    />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
  </div>
    
    <Statistic followers={stats.followers}
      views={stats.views}
      likes={stats.likes} />
  
</div>
);

Profile.defaultProps = {
    avatar: defaultImage,
    location: "",
  };

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape(
    {followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
    }).isRequired,
 };

export default Profile;