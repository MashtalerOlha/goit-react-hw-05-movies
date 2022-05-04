import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { ProfileImage, List } from './Cast.Styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);

  return (
    <List>
      {cast.map(({ original_name, character, profile_path, cast_id }) => {
        return (
          <li key={cast_id}>
            <ProfileImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_ndX6rqGyzmR8kzU6OT8YR93u07LHQfpUv3Ow_uvqSR7SmydjnSdVZlkBusTXZYPvs0&usqp=CAU'
              }
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </List>
  );
}
