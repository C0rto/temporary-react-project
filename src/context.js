import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /* Random Generator */
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  const [loading, setLoading] = useState(true);
  // This state grab the words on search form to fetch data in a specific way
  const [searchTerm, setSearchTerm] = useState('a');
  // This state grab the cocktails from the API
  const [cocktails, setCocktails] = useState([]);

  // Fetch the DATA From THECOCKTAIlDB.COM

  const fetchDrinks = useCallback(async () => {
    /* Quando iniziamo il fetch il loading è su true
      in modo da mostrare il loading, e sebbene il loading sia impostato
      di default su true */
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            drink;
          /* ritorno un nuovo oggetto con proprietà più leggibili :) */
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            alcoholic: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  const dice = () => {
    setSearchTerm(randomCharacter);
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    /* non importo il searchTerm perchè lavoro con 
    uncontrolled input */
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm, dice }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
