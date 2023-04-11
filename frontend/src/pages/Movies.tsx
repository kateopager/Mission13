import { useEffect, useState } from 'react';
import { Movie } from '../movies/movie';
<link rel="stylesheet" type="text/css" href="index.css" />;

//const md = data.MovieData;

function MovieList() {
  const [listofmovies, setListofMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListofMovies(temp);
    };
    fetchMovie();
  }, []);

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
              {listofmovies.map((m) => (
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
