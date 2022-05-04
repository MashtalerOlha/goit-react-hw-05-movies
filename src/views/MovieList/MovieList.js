import { Link } from 'react-router-dom';

export default function MovieList({ movie }) {
  return (
    <li>
      <Link to={`${movie.id}`}>
        <p>{movie.title}</p>
      </Link>
    </li>
  );
}
