import { useNavigate } from 'react-router-dom';
import {
  Card,
  GoBack,
  MovieName,
  List,
  Item,
  InfoType,
} from './MovieCard.Styled';

export default function MovieCard({ movie }) {
  const {
    original_title,
    // genres,
    overview,
    popularity,
    poster_path,
    vote_average,
  } = movie;

  const navigate = useNavigate();

  return (
    <Card>
      <GoBack onClick={() => navigate(-1)}>Go back</GoBack>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg'
        }
        alt={original_title}
      />
      <div>
        <MovieName>{original_title}</MovieName>
        <List>
          <Item>
            <InfoType>Overview:</InfoType> {overview}
          </Item>
          <Item>
            <InfoType>Popularity:</InfoType> {popularity}
          </Item>
          <Item>
            {' '}
            <InfoType>User score:</InfoType> {vote_average}
          </Item>
          {/* <li>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </li> */}
        </List>
      </div>
    </Card>
  );
}
