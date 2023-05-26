import { useState, useEffect } from 'react';
import getPopularFilms from '../../API/filmsAPI';
import FilmCard from '../../components/FilmCard/FilmCard';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getAndSetPopularFilms = async() => {
      try {
        const popularFilms = await getPopularFilms()
        setFilms(popularFilms.results)

      } catch (error) {}
    };

    getAndSetPopularFilms()
  }, []);

  return (
    <>
      {films.map(({id}) => (
        <FilmCard key={id} id={id}/>
      ))}
    </>
  );
};

export default Home;
