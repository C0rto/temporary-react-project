import React from 'react';
import { useGlobalContext } from '../context';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { FaFrown } from 'react-icons/fa';

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h1 className="section-error">
        <FaFrown /> <br />
        Mi dispiace non ho trovato cocktails!
      </h1>
    );
  }
  return (
    <section className="section">
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
