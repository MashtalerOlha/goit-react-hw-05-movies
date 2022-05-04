import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import MovieCard from './MovieCard';

export default function MovieDetail() {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
       fetchMovieById(movieId).then(response => {
        setMovie(response);
      });
  }, [movieId]);

  return (
    <>
      <MovieCard movie={movie} />
      <div>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <NavLink to={`cast`}>Cast</NavLink>
            <NavLink to={`reviews`}>Rewiews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
