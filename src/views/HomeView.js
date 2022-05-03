import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as trendMovieApi from '../services/api';
import PageHeading from '../components/PageHeading/PageHeading';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    trendMovieApi
      .fetchTrendingMovies()
      .then(response => setMovies(response.results));
  }, []);

  return (
    <>
      <PageHeading> Trending today </PageHeading>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}> {movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
