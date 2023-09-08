import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { Loader } from "./Loader";
import { useKey } from "./useKey";

export function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
export function MovieDetail({ id, onCloseMovie, onAddWatchedMovie }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, sertUserRating] = useState(0);

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useKey("Escape", onCloseMovie);
  // useEffect(() => {
  //   function callback(e) {
  //     if (e.code === "Escape") {
  //       onCloseMovie();
  //     }
  //   }
  //   document.addEventListener("keydown", callback);

  //   // cleam event
  //   return () => {
  //     document.removeEventListener("keydown", callback);
  //   };
  // }, [onCloseMovie]);

  useEffect(() => {
    async function getMovieDetail() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=df50f892&i=${id}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }

    getMovieDetail();
  }, [id]);

  function handleAddMovie() {
    onCloseMovie();
    const newWatchedMovie = {
      imdbId: id,
      title,
      year,
      poster,
      userRating: Number(userRating),
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
    };

    onAddWatchedMovie(newWatchedMovie);
  }

  useEffect(() => {
    if (!title) return;
    document.title = title;

    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="details">
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>🌟</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              <StarRating
                maxRate={10}
                size={24}
                onSetRating={sertUserRating}
              ></StarRating>
              {userRating > 0 && (
                <button className="btn-add" onClick={handleAddMovie}>
                  + Add to watched list
                </button>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </div>
      )}
    </>
  );
}
