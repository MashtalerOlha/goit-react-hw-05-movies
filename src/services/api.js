const BASE_URL = 'https://api.themoviedb.org/';
const KEY = '473ca4e231c4cd1e792e4cbfa4523f8d';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  const url = new URL(`3/trending/movie/day?api_key=${KEY}`, BASE_URL);
  return fetchWithErrorHandling(url);
}

export function fetchSearchMovies(query) {
  const url = new URL(`3/search/movie?api_key=${KEY}&query=${query}`, BASE_URL);
  return fetchWithErrorHandling(url);
}

export function fetchMovieById(id) {
  const url = new URL(`3/movie/${id}?api_key=${KEY}&language=en-US`, BASE_URL);
  return fetchWithErrorHandling(url);
}

export function fetchMovieCast(id) {
  const url = new URL(
    `3/movie/${id}/credits?api_key=${KEY}&language=en-US`,
    BASE_URL
  );
  return fetchWithErrorHandling(url);
}

export function fetchMovieReviews(id) {
  const url = new URL(
    `3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
    BASE_URL
  );
  return fetchWithErrorHandling(url);
}
