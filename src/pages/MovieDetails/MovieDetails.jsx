import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from '../../API/filmsAPI';

// import css from './movieDetails.module.css';

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
    <button>{'< GO BACK'}</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            filmData.poster_path && filmData.poster_path
          }`}
          alt="img"
        />
        <div>
          <h1>{filmData.original_title && filmData.original_title}</h1>
          <div>
            <h2>User Score:</h2>
            <p>{filmData.vote_average && filmData.vote_average}</p>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{filmData.overview && filmData.overview}</p>
          </div>
          <div>
            <h2>Genres</h2>
            <ul>
              {filmData.genres &&
                filmData.genres.map(({ name, id }) => <li key={id}>{name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
