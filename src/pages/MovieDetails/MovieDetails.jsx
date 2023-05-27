import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getFilmById } from '../../API/filmsAPI';

import css from './movieDetails.module.css';
import GoBackButton from '../../components/GoBackButton/GoBackButton';

const MovieDetails = () => {
  const params = useParams();
  const [filmData, setFilmData] = useState({});

  useEffect(() => {
    const getAndSetFilmData = async () => {
      try {
        const data = await getFilmById(params.movieId);
        setFilmData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    getAndSetFilmData();
  }, [params.movieId]);

  return (
    <>
    <GoBackButton />
      <div className={css.filmDataWrap}>
        <img
          className={css.filmPoster}
          src={`https://image.tmdb.org/t/p/original/${
            filmData.poster_path && filmData.poster_path
          }`}
          alt="img"
        />
        <div>
          <h1 className={css.filmTitle}>
            {filmData.original_title && filmData.original_title}
          </h1>
          <div className={css.userScoreWrap}>
            <h2 className={css.userScoreTitle}>User Score:</h2>
            <p className={css.userScoreValue}>
              {filmData.vote_average && filmData.vote_average}
            </p>
          </div>
          <div>
            <h2 className={css.filmDataTitle}>Overview</h2>
            <p className={css.filmDataValue}>
              {filmData.overview && filmData.overview}
            </p>
          </div>
          <div>
            <h2 className={css.filmDataTitle}>Genres</h2>
            <ul className={css.filmGenresList}>
              {filmData.genres &&
                filmData.genres.map(({ name, id }) => (
                  <li className={css.filmDataValue} key={id}>
                    {name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={css.additionalInfoWrap}>
        <Link className={css.additionalInfoLink} to={`cast`}>
          CAST
        </Link>
        <Link className={css.additionalInfoLink} to={`reviews`}>
          REVIEWS
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
