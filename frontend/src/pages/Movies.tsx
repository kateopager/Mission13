//import React, { useState } from 'react';
import data from '../MovieData.json';
<link rel="stylesheet" type="text/css" href="index.css" />;

const md = data.MovieData;

function MovieList() {
  //const [listofmovies, setlistofmovies] = useState(md);

  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <div>
          <h1 className="text-center">Joel Hilton's Movie Collection</h1>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {md.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MovieList;
