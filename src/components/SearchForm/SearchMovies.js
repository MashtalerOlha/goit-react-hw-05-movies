import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../services/api';
import MovieList from '../../views/MovieList/MovieList';
import { SearchButton, SearchForm, Input, FilmList } from './SearchForm.Styled';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInput, setUserInput] = useState('');
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  const handleInputChange = e => {
    setUserInput(e.currentTarget.value);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchSearchMovies(query).then(({ results }) => {
      setMovies(results);
    });
    reset();
  }, [query]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: userInput });
  };

  const reset = () => {
    return setUserInput('');
  };

  return (
    <>
    <div>
      <SearchForm onSubmit={onFormSubmit}>
        <Input
          onChange={handleInputChange}
          value={userInput}
          type="text"
          autoComplete="off"
          placeholder="Search movie"
          autoFocus="off"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <FilmList>
        {movies.map(movie => {
          return <MovieList movie={movie} key={movie.id} />;
        })}
      </FilmList>
      </div>
    </>
  );
}
