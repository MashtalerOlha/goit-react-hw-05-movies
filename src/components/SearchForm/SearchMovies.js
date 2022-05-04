import { useState } from 'react';
import { fetchSearchMovies } from '../../services/api';
import MovieList from '../../views/MovieList/MovieList';
import { SearchButton, SearchForm, Input, FilmList } from './SearchForm.Styled';


export default function MoviesPage() {
  const [userInput, setUserInput] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInputChange = e => {
    setUserInput(e.currentTarget.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();

    fetchSearchMovies(userInput).then(({ results }) => {
      setMovies(results);
    });

    reset();
  };

  const reset = () => {
    return setUserInput('');
  };

  return (
    <>
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
    </>
  );
}
