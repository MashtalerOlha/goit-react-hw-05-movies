import { useLocation } from 'react-router-dom';
import { Movie, Film , MovieTitle} from 'views/HomeView/HomeView.Styled';

export default function MovieList({ movie }) {
  const location = useLocation();

  return (
    <Movie>
      <Film to={`${movie.id}`} state={{ from: location }}>
        <img
        width={300} height={400}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg'
          }
          alt={movie.original_title}
        />
        <MovieTitle >{movie.title}</MovieTitle>
      </Film>
    </Movie>
  );
}
