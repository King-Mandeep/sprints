import MovieGrid from
"../components/movieGrid";

import { useFavorites }
from "../context/favoritesContext";

function Favorites() {
  const { favorites } =
    useFavorites();

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8">
        My Favorites
      </h2>

      {favorites.length === 0 ? (
        <p className="text-slate-400">
          No favorite movies yet.
        </p>
      ) : (
        <MovieGrid
          movies={favorites}
        />
      )}
    </main>
  );
}

export default Favorites;