// MovieList.js
import React from "react";

function MovieList({ movies, selectedGenre }) {
  return (
    <div className="movie-list">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(
            (movie, index) =>
              (!selectedGenre || movie.genre === selectedGenre) && (
                <tr key={index}>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.year}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
