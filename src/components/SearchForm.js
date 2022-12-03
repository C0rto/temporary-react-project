import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section>
      <form
        action=""
        className="search-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="form-control">
          <input
            type="text"
            id="name"
            placeholder="Cerca un cocktail"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
