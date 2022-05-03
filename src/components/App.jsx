import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomeView from 'views/HomeView';
import SearchMovies from 'views/SearchMovies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:movieId">
          <Route path="cast" />
          <Route path="reviews" />
        </Route>
        <Route path="*" />
      </Route>
    </Routes>
  );
};
