import { useState } from 'react';
import { fetchSearchMovies } from '../services/api';
import MovieList from './MovieList/MovieList';

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
      <form onSubmit={onFormSubmit}>
        <input
          onChange={handleInputChange}
          value={userInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Find movie</button>
      </form>
      <ul>
        {movies.map(movie => {
          return <MovieList movie={movie} key={movie.id} />;
        })}
      </ul>
    </>
  );
}
