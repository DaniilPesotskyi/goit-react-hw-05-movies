import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from '../../API/filmsAPI';
import css from './Cast.module.css';
import Loader from '../Loader/Loader';

const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState();
  const [inLoad, setInLoad] = useState(false); 

  useEffect(() => {
    const getAndSetCast = async () => {
      try {
        setInLoad(true);
        const castData = await getFilmCast(params.movieId);
        setCast(castData.cast);
        setInLoad(false);
      } catch (error) {
        setInLoad(false);
        console.log(error);
      }
    };

    getAndSetCast();
  }, [params.movieId]);

  return (
    <>
      {inLoad && <Loader />}
      <ul className={css.castList}>
        {cast && cast.length !== 0 ?
          cast.map(({ id, profile_path }) => (
            <li key={id}>
              <img
                className={css.profile}
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                alt=""
              />
            </li>
          )) : (<p className={css.nothingText}>THERE`S NO CAST</p>)}
      </ul>
    </>
  );
};

export default Cast;
