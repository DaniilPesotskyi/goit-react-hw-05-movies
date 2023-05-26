import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

import Home from './../../pages/Home/Home';
import Movies from './../../pages/Movies/Movies';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<div>MOVIE ID</div>}>
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
