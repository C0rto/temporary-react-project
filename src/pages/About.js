import React from 'react';

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        Questa è un semplice Web App per cercare cocktails. Scrivi il nome di un
        cocktail o le lettere che ricordi del cocktail che desideri, la ricerca
        automatica farà il resto. <br />I dati utilizzati provengono da{' '}
        <a href="https://www.thecocktaildb.com/">TheCocktailDB</a> e dalla loro
        API gratuita.
      </p>
    </section>
  );
};

export default About;
