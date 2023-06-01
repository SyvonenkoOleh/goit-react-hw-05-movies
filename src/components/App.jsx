import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StartPage } from '../pages/StartPage/StartPage';

// Ліниве завантаження компонентів
const Home = lazy(() => import('pages/Home/Home')); // Компонент Home
const Movies = lazy(() => import('pages/Movies/Movies')); // Компонент Movies
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails')); // Компонент MovieDetails
const Review = lazy(() => import('./Review/Review')); // Компонент Review
const Cast = lazy(() => import('./Cast/Cast')); // Компонент Cast

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}>
        <Route index element={<Home />} /> // Кореневий шлях з компонентом Home
        <Route path="movies" element={<Movies />} /> // Шлях "movies" з компонентом Movies
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} /> // Вкладений шлях "cast" з компонентом Cast
          <Route path="review" element={<Review />} /> // Вкладений шлях "review" з компонентом Review
        </Route>
      </Route>
    </Routes>
  );
};
