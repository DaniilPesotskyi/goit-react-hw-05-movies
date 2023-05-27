import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import { useEffect, useState } from 'react';
import { getFilmByQuery } from '../../API/filmsAPI';
import FilmCard from '../../components/FilmCard/FilmCard';

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
      console.log(filmsData.results)
      setMovies(filmsData.results);
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

      <ul className={css.filmList}>
        {movies && movies.map(({id, poster_path}) => (
            <FilmCard key={id} id={id} poster={poster_path}/>
        ))}
      </ul>
    </>
  );
};

export default Movies;
