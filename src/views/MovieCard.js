export default function MovieCard({ movie }) {
  const {
    original_title,
    overview,
    popularity,
    poster_path,
    vote_average,
  } = movie;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={original_title}
      />
      <p>{original_title}</p>
      <ul>
        <li> Overview: {overview}</li>
        <li> Popularity: {popularity}</li>
        <li> Vote average: {vote_average}</li>
      </ul>
    </div>
  );
}
