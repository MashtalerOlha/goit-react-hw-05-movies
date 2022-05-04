import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ original_name, character, profile_path, cast_id }) => {
        return (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
}
