import React from 'react';

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        Questa Web App è un semplice iterfaccia per cercare cocktails. I dati
        utilizzati provengono da{' '}
        <a href="https://www.thecocktaildb.com/">TheCocktailDB</a> e dalla loro
        API gratuita.
      </p>
    </section>
  );
};

export default About;
