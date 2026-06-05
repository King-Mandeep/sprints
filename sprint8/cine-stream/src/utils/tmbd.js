import axios from "axios";

const token = import.meta.env.VITE_TMDB_TOKEN;

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export async function getPopularMovies(page = 1) {
  const response = await tmdb.get(
    `/movie/popular?page=${page}`
  );

  return response.data;
}

export async function searchMovies(
  query,
  page = 1
) {
  const response = await tmdb.get(
    `/search/movie?query=${encodeURIComponent(
      query
    )}&page=${page}`
  );

  return response.data;
}

export default tmdb;