import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//import './Book.css';

// 객체 분할 방식으로
function Book({ title, description, rights, extent, referenceIdentifier }) {
  return (
    <div className="book">
      <Link
        to={{
          pathname: '/book-detail',
          state: { title, description, rights, extent, referenceIdentifier },
        }}
      >
        <img src={referenceIdentifier} alt={title} title={title} />
        <div className="book-data">
          <h3 className="book-title">{title}</h3>
          <h5 className="book-rights">{rights}</h5>
          <h4 className="book-extent">{extent}p</h4>
          <p className="book-description">{description.slice(0, 180)}</p>
        </div>
      </Link>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rights: PropTypes.string.isRequired,
  extent: PropTypes.number.isRequired,
  referenceIdentifier: PropTypes.string.isRequired,
};

export default Book;
