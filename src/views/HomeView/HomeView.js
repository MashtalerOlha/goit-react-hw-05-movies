import { useState, useEffect } from 'react';
import { FilmList, Film, Item, MovieTitle } from './HomeView.Styled';

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
    <div>
      <PageHeading> Trending today </PageHeading>
      {movies && (
        <FilmList>
          {movies.map(movie => (
            <Item key={movie.id}>
              <Film to={`movies/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg'
                  }
                  alt={movie.original_title}
                />
                <MovieTitle> {movie.original_title} </MovieTitle>
              </Film>
            </Item>
          ))}
        </FilmList>
      )}
      </div>
    </>
  );
}
