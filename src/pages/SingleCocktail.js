import React, { useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import { FaCocktail, FaListOl, FaInfo, FaBarcode } from 'react-icons/fa';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strAlcoholic: info,
            strDrinkThumb: img,
            strGlass: glass,
            strInstructionsIT: instructions,
            strCategory: category,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
          } = data.drinks[0];
          const ingredients = [
            [strIngredient1, strMeasure1],
            [strIngredient2, strMeasure2],
            [strIngredient3, strMeasure3],
            [strIngredient4, strMeasure4],
            [strIngredient5, strMeasure5],
            [strIngredient6, strMeasure6],
            [strIngredient7, strMeasure7],
            [strIngredient8, strMeasure8],
            [strIngredient9, strMeasure9],
            [strIngredient10, strMeasure10],
            [strIngredient11, strMeasure11],
            [strIngredient12, strMeasure12],
            [strIngredient13, strMeasure13],
            [strIngredient14, strMeasure14],
            [strIngredient15, strMeasure15],
          ];
          const drinkIngredients = ingredients.filter((i) => {
            return i[0] !== null && i[1] !== null;
          });

          const newCocktail = {
            name,
            img,
            info,
            category,
            instructions,
            glass,
            drinkIngredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }
  const { name, img, info, category, instructions, glass, drinkIngredients } =
    cocktail;
  return (
    <section className="section cocktail-section">
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <h2 className="section-title">{name}</h2>
          <p>
            <span className="drink-data">
              <FaBarcode /> categoria
            </span>
            {category}
          </p>
          <p>
            <span className="drink-data">
              <FaInfo /> info
            </span>
            {info}
          </p>
          <p>
            <span className="drink-data">
              <FaCocktail />
              bicchiere
            </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">
              <FaListOl /> ingredienti
            </span>
            {drinkIngredients
              .map((ingredient, index) => {
                /* icons here */
                return ingredient ? (
                  <span style={{ fontWeight: '300' }} key={index}>
                    {ingredient[0]}, {ingredient[1]}
                  </span>
                ) : null;
              })
              .filter((ingredient) => ingredient !== null)}
          </p>
          <p>
            <span className="drink-data">
              <FaCocktail /> preparazione
            </span>
            {instructions}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
