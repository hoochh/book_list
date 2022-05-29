import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//import './Festival.css';

// 객체 분할 방식으로
function Festival({ id, title, subTitle, location, contents, img, thumb }) {
  return (
    <div className="festival">
      <Link
        to={{
          pathname: '/festival-detail',
          state: { id, title, subTitle, location, contents, img, thumb },
        }}
      >
        <img src={thumb} alt={title} title={title} />
        <div className="festival-data">
          <h3 className="festival-title">{title}</h3>
          <h4 className="festival-subTitle">{subTitle}</h4>
          <h5 className="festival-location">{location}</h5>
          <p className="festival-contents">{contents.slice(0, 180)}</p>
        </div>
      </Link>
    </div>
  );
}

Festival.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default Festival;
