import { NavLink } from "react-router-dom";
import { useFavorites }
from "../context/favoritesContext";


function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400"
      : "text-slate-300 hover:text-white";
      const { favorites } =
  useFavorites();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="font-bold text-xl">
          CineStream
        </h1>

        <div className="flex items-center gap-3 sm:gap-6 text-sm sm:text-base">
          <NavLink
            to="/"
            className={linkClass}
          >
            Home
          </NavLink>

          <NavLink
  to="/favorites"
  className={linkClass}
>
  Favorites
  <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-600 text-xs">
    {favorites.length}
  </span>
</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;