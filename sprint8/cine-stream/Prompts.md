# Prompts.md

This document records the major development discussions and implementation decisions made while building CineStream.

---

## Project Planning

Goal: Build a movie discovery application using the TMDB API with search, favorites, and infinite scrolling.

Key decisions:

* Use React with Vite
* Use TMDB as the primary data source
* Implement Phase 1 and Phase 2 requirements
* Include lazy loading for movie posters

---

## API Architecture

Discussion focused on avoiding direct API calls throughout components.

Decision:

* Create a dedicated `utils/tmdb.js` file
* Centralize all TMDB requests
* Reuse API functions across pages

Implemented:

* getPopularMovies()
* searchMovies()

---

## Search Experience

Requirement:

Search movies while reducing unnecessary API requests.

Decision:

* Build a reusable `useDebounce` hook
* Delay search requests until typing stops

Outcome:

* Fewer API calls
* Improved user experience

---

## Infinite Scrolling

Requirement:

Load additional movie pages automatically while scrolling.

Decision:

* Use Intersection Observer
* Extract logic into a custom `useInfiniteScroll` hook

Outcome:

* Cleaner Home page component
* Reusable scroll detection logic

---

## Favorites Management

Requirement:

Allow users to save movies and retain them after refresh.

Decision:

* Use React Context for global favorites state
* Persist favorites using localStorage

Outcome:

* Favorites accessible from multiple pages
* State survives browser refresh

---

## UI Decisions

Key choices:

* Dark theme inspired by streaming platforms
* Responsive movie grid
* Sticky navigation bar
* Favorites count indicator
* Lazy-loaded poster images

---

## Refactoring Decisions

To improve maintainability:

* API logic moved to utility layer
* Debounce logic extracted into custom hook
* Infinite scroll logic extracted into custom hook
* Favorites state centralized in Context API

---

## Testing Checklist

Verified:

* Popular movie fetch
* Search functionality
* Debounced API calls
* Infinite scrolling
* Favorites persistence
* Responsive layout
* Route navigation
* Production build

---

## Final Notes

The project was implemented incrementally by first validating API integration, then building reusable UI components, followed by search, favorites, and infinite scrolling features.
