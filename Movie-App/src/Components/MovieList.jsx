import { enqueueSnackbar } from "notistack";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function MovieList() {
  const [detail, setDetail] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setmsg] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=7f4f82cf821cfa0967feac30e4ec86d3"
    )
      .then((response) => response.json())
      .then((data) => {
        // Set the array of movies to the detail state
        if (data && data.results) {
          setDetail(data.results);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(detail);

  return (
    <div>
      <div className="search">
        <form className="d-flex" role="search">
          <input
            className="form"
            type="search"
            placeholder="Search Movies..."
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <div className="box">
        <p>{msg}</p>
        {detail
          .filter((movie) => movie.title.trim().includes(search.trim()))
          .map((movie) => {
            const handleWatch = () => {
              enqueueSnackbar("added to watching");

              sessionStorage.setItem(movie.id, "WATCHING");
            };
            const handleComplete = () => {
              enqueueSnackbar("added to completed");

              sessionStorage.setItem(movie.id, "COMPLETED");
              // navigate(`Status/${movie.id}`);
            };
            const handleHold = () => {
              enqueueSnackbar("added to hold");

              sessionStorage.setItem(movie.id, "HOLD");
              // setStatus("Watching");
            };

            return (
              <div className="MovieL">
                <div className="photo">
                  <img
                    className="img1"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    height="200px"
                    width="250px"
                  />
                </div>
                <div className="details">
                  <h5 style={{ fontWeight: "bold" }}> {movie.title}</h5>
                  <h5>Ratings: {movie.vote_average}</h5>
                  <h5>Release Date: {movie.release_date}</h5>
                  <h5>Language: {movie.original_language}</h5>
                  {/* <p>Description: {movie.overview}</p> */}
                </div>
                <div className="list">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleWatch}
                  >
                    Watching
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={handleComplete}
                  >
                    Finished
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={handleHold}
                  >
                    Hold List
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MovieList;
