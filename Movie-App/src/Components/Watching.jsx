import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Watching() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const keys = Object.keys(sessionStorage);

    const filteredList = keys.filter(
      (key) => sessionStorage.getItem(key)?.toUpperCase() === "WATCHING"
    );
    setMovieList(filteredList);
  }, []);

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const details = await Promise.all(
        movieList.map(async (movieId) => {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=7f4f82cf821cfa0967feac30e4ec86d3`
          );
          const data = await response.json();
          return data;
        })
      );
      setMovieDetails(details);
    };

    if (movieList.length > 0) {
      fetchMovieInfo();
    }
  }, [movieList]);

  return (
    <div>
      <h1>Watching Movies</h1>
      <div className="wat">
        <ul>
          {movieDetails.map((movie) => {
            const handleComplete = () => {
              enqueueSnackbar("added to completed");
              sessionStorage.setItem(movie.id, "COMPLETED");
              // navigate(`Status/${movie.id}`);
            };
            return (
              <li key={movie.id}>
                <div className="detailed">
                  <img
                    className="img1"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    height="200px"
                    width="250px"
                    style={{ marginLeft: "20px" }}
                  />

                  <h5 style={{ fontWeight: "bold" }}>Title: {movie.title}</h5>
                  <h5>Release Date: {movie.release_date}</h5>
                  <h5>Language: {movie.original_language}</h5>
                </div>
                <div className="button">
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={handleComplete}
                  >
                    Finished
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Watching;
