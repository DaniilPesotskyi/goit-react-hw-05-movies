import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import { useEffect, useState } from 'react';
import { getFilmByQuery } from '../../API/filmsAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ? searchParams.get('query') : '';

  const updateQueryString = e => {
    const params = e.target.value !== '' ? { query: e.target.value } : {};

    setSearchParams(params);
  };

  useEffect(() => {
    const getAndSetFilms = async () => {
      const filmsData = await getFilmByQuery(query);
      console.log(filmsData)
      setMovies([...filmsData.results]);
    };
    getAndSetFilms();
  }, [query]);

  return (
    <>
      <div className={css.searchWrap}>
        <h1 className={css.pageTitle}>FIND FILM</h1>
        <input
          className={css.searchInput}
          type="text"
          value={query}
          onChange={updateQueryString}
          placeholder="Search"
        />
      </div>

      <ul>
        {movies && movies.map(({id}) => (
            <li key={id}>
                <p>{id}</p>
            </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
