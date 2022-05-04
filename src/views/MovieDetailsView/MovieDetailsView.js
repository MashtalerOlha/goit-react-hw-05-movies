import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import MovieCard from '../../components/MovieCard/MovieCard';
import PageHeading from '../../components/PageHeading/PageHeading';
import { ItemLink, List } from './MovieDetailsView.Styled';

export default function MovieDetail() {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  // useEffect(() => {
  //   fetchMovieById(movieId).then(response => {
  //     setMovie(response);
  //   });
  // }, [movieId]);

  useEffect(() => {
    async function fetchItem() {
      try {
        const movie = await fetchMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        alert(error);
      }
    }
    fetchItem();
  }, [movieId]);
  return (
    <>
      <MovieCard movie={movie} />
      <div>
        <PageHeading>Additional Information</PageHeading>
        <List>
          <li>
            <ItemLink to={`cast`}>Cast</ItemLink>
            <ItemLink to={`reviews`}>Rewiews</ItemLink>
          </li>
        </List>
      </div>
      <Outlet />
    </>
  );
}
