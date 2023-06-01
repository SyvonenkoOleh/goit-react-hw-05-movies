import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchMovie } from '../../Api/fetchAPI';
import { MovieListContainer, MovieListItem, MovieName } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListContainer>
      {movies.map(movie => {
        return (
          <MovieListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path
                    ? `${fetchMovie.BASE_URL}${movie.poster_path}`
                    : fetchMovie.defaultImg
                }
                alt={movie.title}
              />
              <span>{movie.vote_average.toFixed(2)}</span>
            </Link>
            <MovieName>
              {movie.title}
            </MovieName>
          </MovieListItem>
        );
      })}
    </MovieListContainer>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
