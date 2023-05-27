import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from '../../API/filmsAPI';
import css from './Cast.module.css';

const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const getAndSetCast = async () => {
      const castData = await getFilmCast(params.movieId);
      console.log(castData);
      setCast(castData.cast);
    };

    getAndSetCast();
  }, [params.movieId]);

  return (
    <>
      <ul className={css.castList}>
        {cast &&
          cast.map(({ id, profile_path }) => (
            <li key={id}>
              <img
                className={css.profile}
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                alt=""
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
