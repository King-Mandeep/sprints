# CineStream

CineStream is a movie discovery application built with React and the TMDB API. Users can browse popular movies, search for titles, save favorites, and continuously load more content through infinite scrolling.

## Live Demo

Add deployment link here

## Demo Video

Add demo video link here

---

## Features

### Movie Discovery

* Browse popular movies from TMDB
* View movie posters, ratings, and release years
* Responsive movie grid layout

### Search

* Search movies using TMDB search API
* Debounced search input to reduce unnecessary API requests
* Automatic fallback to popular movies when search is cleared

### Favorites

* Add and remove favorite movies
* Favorites persist using localStorage
* Dedicated favorites page
* Favorites count displayed in navbar

### Infinite Scrolling

* Loads additional movies automatically when reaching the bottom of the page
* Implemented using Intersection Observer API
* Movies are appended without disrupting scroll position

### Performance

* Lazy-loaded movie posters
* Debounced API requests
* Reusable API utility layer

---

## Tech Stack

* React
* React Router DOM
* Tailwind CSS
* Axios
* TMDB API

---

## Project Structure

```text
src
├── components
│   ├── Loader.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── Navbar.jsx
│   └── SearchBar.jsx
│
├── context
│   └── FavoritesContext.jsx
│
├── hooks
│   ├── useDebounce.js
│   └── useInfiniteScroll.js
│
├── pages
│   ├── Favorites.jsx
│   └── Home.jsx
│
├── utils
│   └── tmdb.js
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd cine-stream
```

Install dependencies:

```bash
npm install
```

Create a .env file:

```env
VITE_TMDB_TOKEN=your_tmdb_read_access_token
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Environment Variables

| Variable        | Description            |
| --------------- | ---------------------- |
| VITE_TMDB_TOKEN | TMDB Read Access Token |

---

## Learning Outcomes

During this project I worked with:

* API integration using Axios
* Custom React hooks
* Context API for global state management
* Infinite scrolling with Intersection Observer
* Search optimization using debouncing
* Local storage persistence
* Responsive UI design

---

## Author

Mandeep Tiwari
