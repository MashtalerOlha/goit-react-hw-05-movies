import { SearchButton, SearchForm } from "./SearchForm.Styled";
export default function SearchMoviesForm({ onSubmit }) {
  return (
    <SearchForm autoComplete="off" onSubmit={onSubmit}>
      <input name="name" type="text" placeholder="Search a movie" />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
}
