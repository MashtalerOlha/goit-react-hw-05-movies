
export default function SearchMoviesForm({ onSubmit }) {
    return (
        <form autoComplete="off" onSubmit={onSubmit}>
          <input name="name" type="text" placeholder="Search a movie" />
          <button type="submit">Search</button>
        </form>
    );
  }