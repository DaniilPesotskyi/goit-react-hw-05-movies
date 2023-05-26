import { Link } from "react-router-dom";

const FilmCard = ({id}) => {
  return (
    <div>
      <p>FILM</p>
      <Link to={`movies/${id}`}>Link</Link>
    </div>
  );
};

export default FilmCard;
