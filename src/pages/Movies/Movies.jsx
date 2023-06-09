import { useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import { useEffect, useState } from 'react';
import { getFilmByQuery } from '../../API/filmsAPI';
import FilmCard from '../../components/FilmCard/FilmCard';
import Loader from '../../components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [inLoad, setInLoad] = useState(false);
  const query = searchParams.get('query') ? searchParams.get('query') : '';
  const location = useLocation()
  const updateQueryString = e => {
    const params = e.target.value !== '' ? { query: e.target.value } : {};

    setSearchParams(params);
  };

  useEffect(() => {
    const getAndSetFilms = async () => {
      try {
        setInLoad(true);
        const filmsData = await getFilmByQuery(query);
        setMovies(filmsData.results);
        setInLoad(false);
      } catch (error) {
        console.log(error);
        setInLoad(false);
      }
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
      {inLoad && <Loader />}
      <ul className={css.filmList}>
        {movies &&
          movies.map(({ id, poster_path }) => (
            <FilmCard key={id} id={id} poster={poster_path} from={{from: location}}/>
          ))}
      </ul>
    </>
  );
};

export default Movies;
