import { useState, useEffect } from 'react';
import { FilmList, Film, Item } from './HomeView.Styled';

import * as trendMovieApi from '../../services/api';
import PageHeading from '../../components/PageHeading/PageHeading';

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
        <FilmList>
          {movies.map(movie => (
            <Item key={movie.id}>
              <Film to={`movies/${movie.id}`}> {movie.original_title}</Film>
            </Item>
          ))}
        </FilmList>
      )}
    </>
  );
}
