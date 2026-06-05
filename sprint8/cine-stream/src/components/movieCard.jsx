import { useFavorites }
from "../context/favoritesContext";

function MovieCard({ movie }) {
    const {
  toggleFavorite,
  isFavorite,
} = useFavorites();

const favorite =
  isFavorite(movie.id);
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";

  return (
    <article className="bg-slate-800 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/40 transition">
      <div className="aspect-[2/3] bg-slate-700">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={movie.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            No Poster
          </div>
        )}
      </div>

<div className="flex justify-end mb-2">
  <button
    onClick={() =>
      toggleFavorite(movie)
    }
    className="text-xl"
  >
    {favorite ? "❤️" : "🤍"}
  </button>
</div>
      <div className="p-4">
        <h3 className="font-semibold line-clamp-2">
          {movie.title}
        </h3>

        <div className="mt-2 flex justify-between text-sm text-slate-400">
          <span>{releaseYear}</span>
          <span>⭐ {movie.vote_average?.toFixed(1)}</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;