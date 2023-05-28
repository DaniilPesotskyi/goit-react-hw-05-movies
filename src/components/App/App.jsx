import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../Layout/Layout';
import NotFound from '../../pages/NotFound/NotFound';

const Home = lazy(() => import('./../../pages/Home/Home'));
const Movies = lazy(() => import('./../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('./../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./../Cast/Cast'));
const Reviews = lazy(() => import('./../Reviews/Reviews'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
