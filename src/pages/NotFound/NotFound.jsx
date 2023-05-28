import { Link } from 'react-router-dom';
import css from './NotFound.module.css'
const NotFound = () => {
  return (
    <div className={css.container}>
      <div className={css.errorWrap}>
        <p className={css.errorText}>404</p>
      </div>
      <Link className={css.backLink} to={'/'}>BACK TO HOME</Link>
    </div>
  );
};

export default NotFound
