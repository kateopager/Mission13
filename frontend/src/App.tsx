import React from 'react';
import './App.css';
import Home from './pages/Home';
import MovieList from './pages/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Podcast from './pages/Podcasts';
//import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Podcasts" element={<Podcast />} />
            <Route path="Movies" element={<MovieList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
