import { useState, useEffect } from 'react';
import { getPopularFilms } from '../../API/filmsAPI';
import FilmCard from '../../components/FilmCard/FilmCard';
import css from './Home.module.css';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getAndSetPopularFilms = async () => {
      try {
        const popularFilms = await getPopularFilms();
        setFilms(popularFilms.results);
      } catch (error) {}
    };

    getAndSetPopularFilms();
  }, []);

  return (
    <>
      <h1 className={css.pageTitle}>POPULAR FILMS</h1>
      <ul className={css.filmList}>
        {films.map(({ id, poster_path }) => (
          <FilmCard key={id} id={id} poster={poster_path} />
        ))}
      </ul>
    </>
  );
};

export default Home;
