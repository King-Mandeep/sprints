import { useEffect, useState } from "react";

import { getPopularMovies, searchMovies }
  from "../utils/tmbd.js";

import MovieGrid from "../components/movieGrid";
import SearchBar from "../components/searchBar";

import useDebounce from "../hooks/useDebounce";
import useInfiniteScroll
from "../hooks/useInfiniteScroll";
import Loader from "../components/loader.jsx";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
const [loadingMore, setLoadingMore] = useState(false);
    const [searchTerm, setSearchTerm] =
  useState("");
  const loadMoreRef =
  useInfiniteScroll(() => {
    if (!loading) {
      setPage((prev) => prev + 1);
    }
  });

const debouncedSearch =
  useDebounce(searchTerm, 500);

  useEffect(() => {
  async function loadMovies() {
    if (page === 1) {
    setLoading(true);
  } else {
    setLoadingMore(true);
  }
    try {
      let data;

      if (debouncedSearch.trim()) {
        data = await searchMovies(
          debouncedSearch,
          page
        );

        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies((prev) => [
            ...prev,
            ...data.results,
          ]);
        }
      } else {
        data = await getPopularMovies(
          page
        );

        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies((prev) => [
            ...prev,
            ...data.results,
          ]);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
  setLoading(false);
  setLoadingMore(false);
}
  }

  loadMovies();
}, [debouncedSearch, page]);
useEffect(() => {
  setPage(1);
}, [debouncedSearch]);

if (loading && page === 1) {
  return <Loader />;
}
  return (
    <main className="max-w-7xl mx-auto p-6">
  <h2 className="text-3xl font-bold mb-8">
    Popular Movies
  </h2>

  <SearchBar
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
  />

  <MovieGrid movies={movies} />

  {loadingMore && (
    <div className="py-6 text-center text-slate-400">
      Loading more movies...
    </div>
  )}

  <div
    ref={loadMoreRef}
    className="h-10"
  />
</main>
  );
}

export default Home;