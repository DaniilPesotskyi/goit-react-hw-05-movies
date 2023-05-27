import { useEffect, useState } from 'react';
import css from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from '../../API/filmsAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getAndSetFilmReviews = async () => {
      const reviewsData = await getFilmReviews(params.movieId);
      console.log(reviewsData);
      setReviews(reviewsData.results);
    };

    getAndSetFilmReviews();
  }, [params.movieId]);

  return (
    <ul className={css.reviewsList}>
      {reviews && reviews.length !== 0 ? reviews.map(({ id, author, content }) => (
          <li key={id} className={css.review}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        )) : <p className={css.nothingText}>THERE`S NO REVIEWS</p>}
    </ul>
  );
};

export default Reviews;
