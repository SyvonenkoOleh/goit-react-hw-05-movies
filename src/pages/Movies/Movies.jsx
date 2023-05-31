import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchMovie } from '../../Api/fetchAPI';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MovieList } from '../../components/MovieList/MovieList';
import { Btn } from '../../components/Button/Button';
import { MovieMain } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);
  const [total_results, setTotalResults] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const formSubmit = inputQuery => {
    setPage(1);
    setMovies([]);
    setSearchParams(inputQuery !== '' ? { query: inputQuery } : {});
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    fetchMovie.getMovieByQuery(query, page).then(r => {
      setMovies(prevMovie => [...prevMovie, ...r.results]);
      setTotalResults(r.total_results);
    });
  }, [query, page]);

  if (!movies) {
    return;
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <MovieMain>
      <SearchForm onSubmit={formSubmit} />
      {query && <MovieList movies={movies} />}
      {total_results / 20 >= page && (
        <Btn text="Load more" status="load" onClick={loadMore} />
      )}
    </MovieMain>
  );
};

export default Movies;
