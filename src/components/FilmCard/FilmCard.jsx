import { Link } from 'react-router-dom';
import css from './FilmCard.module.css';

const FilmCard = ({ id, poster, path='' }) => {
  return (
    <li className={css.filmCardWrap}>
      <img
        className={css.posterImg}
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt=""
      />
      <div className={css.overlay}>
        <Link className={css.filmCardLink} to={`${path}${id}`}>
          DETAILS
        </Link>
      </div>
    </li>
  );
};

export default FilmCard;
