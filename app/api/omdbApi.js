import axios from 'axios';

const API_KEY = 'fb26f480';  // Replace with your actual OMDb API Key
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    return response.data.Search || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
