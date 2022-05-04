import { Movie, Film } from 'views/HomeView/HomeView.Styled';

export default function MovieList({ movie }) {
  return (
    <Movie>
      <Film to={`${movie.id}`}>
        <p>{movie.title}</p>
      </Film>
    </Movie>
  );
}
