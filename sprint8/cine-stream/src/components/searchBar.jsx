function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="mb-8">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search movies..."
        className="
          w-full
          px-4
          py-3
          rounded-xl
          bg-slate-800
          border border-white/10
          outline-none
          focus:border-blue-500
          transition
        "
      />
    </div>
  );
}

export default SearchBar;