import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarrouselItem.scss';

const CarrouselItem = ({
  cover, title, year, contentRating, duration,
}) => (
  <div className="carrousel-item">
    <img className="carrousel-item__img" src={cover} alt={title} />
    <div className="carrousel-item__details">
      <div>
        <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" alt="play" />
        <img src="https://img.icons8.com/flat_round/64/000000/plus.png" alt="plus" />
      </div>
      <p className="carrousel-item__details--title">{title}</p>
      <p className="carrousel-item__details--subtitle">
        {`${year} ${contentRating} ${duration}}`}
      </p>
    </div>
  </div>
);

CarrouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarrouselItem;
