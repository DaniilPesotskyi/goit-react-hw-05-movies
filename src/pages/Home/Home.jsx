import { useState, useEffect } from 'react';
import { getPopularFilms } from '../../API/filmsAPI';
import FilmCard from '../../components/FilmCard/FilmCard';
import css from './Home.module.css';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [inLoad, setInLoad] = useState(false)

  useEffect(() => {
    const getAndSetPopularFilms = async () => {
      try {
        setInLoad(true)
        const popularFilms = await getPopularFilms();
        setFilms(popularFilms.results);
        setInLoad(false)
      } catch (error) {
        setInLoad(false)
      }
    };

    getAndSetPopularFilms();
  }, []);

  return (
    <>
      <h1 className={css.pageTitle}>POPULAR FILMS</h1>
      {inLoad && <Loader />}
      <ul className={css.filmList}>
        {films.map(({ id, poster_path }) => (
          <FilmCard key={id} id={id} poster={poster_path} path='movies/'/>
        ))}
      </ul>
    </>
  );
};

export default Home;
