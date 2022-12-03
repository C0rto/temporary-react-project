import React from 'react';
import { Link } from 'react-router-dom';
import { FaCocktail, FaInfo } from 'react-icons/fa';

const Cocktail = ({ id, name, image, alcoholic, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name} </h3>
        <h4>
          <FaCocktail /> {glass}{' '}
        </h4>
        <h5>
          <FaInfo /> {alcoholic}{' '}
        </h5>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          Leggi di più
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
