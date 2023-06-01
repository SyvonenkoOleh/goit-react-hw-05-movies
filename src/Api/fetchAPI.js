import axios from 'axios';

window.axios = axios;

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const KEY = '663bd5fd8d905b7ce2d57e9867d3492e';

export class ThemoviedbAPI {
  #API_KEY = KEY;

  constructor() {
    this.BASE_URL = 'https://image.tmdb.org/t/p/w500';
    this.defaultImg =
      'https://m.media-amazon.com/images/M/MV5BMTRkZGE0YWYtMDFhOS00N2I4LTljMTMtYjk0MTI2YmVhOTU4XkEyXkFqcGdeQXVyNjgxNzM0NDI@._V1_.jpg';
  }

  async getPopularMovies(page) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      page: page,
    });

    const { data } = await axios.get('trending/movie/day', { params });
    return data;
  }

  async getMovieByQuery(query, page) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      query: query,
      page: page,
      language: 'en-US',
      include_adult: false,
    });

    const { data } = await axios.get('/search/movie', { params });
    return data;
  }

  async getMovieById(id) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      language: 'en-US',
      include_adult: false,
    });
    return await fetch(
      `https://api.themoviedb.org/3/movie/${id}?${params}`
    ).then(response => {
      if (!response.ok) {
        throw new Error('Oops, there is no movie with that name');
      }
      return response.json();
    });
  }

  async getMovieCast(id) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      language: 'en-US',
    });
    const { data } = await axios.get(`movie/${id}/credits?${params}`);
    return data.cast;
  }

  async getMovieReview(id) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      language: 'en-US',
    });
    const { data } = await axios.get(`movie/${id}/reviews?${params}`);
    return data.results;
  }
}

export const fetchMovie = new ThemoviedbAPI();
