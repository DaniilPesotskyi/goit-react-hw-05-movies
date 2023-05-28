import { useEffect, useState } from 'react';
import css from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from '../../API/filmsAPI';
import Loader from '../Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [inLoad, setInLoad] = useState(false);
  const params = useParams();

  useEffect(() => {
    const getAndSetFilmReviews = async () => {
      try {
        setInLoad(true);
        const reviewsData = await getFilmReviews(params.movieId);
        setReviews(reviewsData.results);
        setInLoad(false);
      } catch (error) {
        setInLoad(false);
        console.log(error);
      }
    };

    getAndSetFilmReviews();
  }, [params.movieId]);

  return (
    <>
      {inLoad && <Loader />}
      <ul className={css.reviewsList}>
        {reviews && reviews.length !== 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id} className={css.review}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p className={css.nothingText}>THERE`S NO REVIEWS</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
