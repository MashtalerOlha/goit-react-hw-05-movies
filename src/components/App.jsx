import { Routes, Route } from 'react-router-dom';
import MovieDetail from 'views/MovieDetailsView/MovieDetailsView';
import { NotFoundView } from 'views/NotFoundView';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const SearchMovies = lazy(() => import('../views/SearchMovies'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('../views/Reviews'));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
  );
};
