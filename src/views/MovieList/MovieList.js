import { useLocation } from 'react-router-dom';
import { Movie, Film } from 'views/HomeView/HomeView.Styled';

export default function MovieList({ movie }) {
  const location = useLocation();

  return (
    <Movie>
      <Film
        to={`${movie.id}`} state={{ from: location }}
      >
        <p>{movie.title}</p>
      </Film>
    </Movie>
  );
}
