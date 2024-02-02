import axios from "axios";

const API_KEY = "baa49f56bfbccb7272838ccf739db101";
const TMBD_URL = "https://api.themoviedb.org/3";

const getRawData = async (api, currentPage, pageSize) => {
  const moviesArray = [];
  try {
    const {
      data: {results},
    } = await axios.get(`${api}&page=${currentPage}`);
    createArrayFromRawData(results, moviesArray, pageSize);
  } catch (error) {
    console.error(
      `Error fetching data for page ${currentPage}:`,
      error.message
    );
    // Handle error as needed
  }
  return moviesArray;
};

const createArrayFromRawData = (array, moviesArray, pageSize) => {
  array.slice(0, pageSize).forEach((movie) => {
    if (movie.backdrop_path) {
      moviesArray.push({
        id: movie.id,
        name: movie.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        description: movie.overview,
        popularity: movie.popularity,
        date: movie.release_date,
      });
    }
  });
};

export const fetchMovies = async (currentPage, pageSize = 8) => {
  const movies = await getRawData(
    `${TMBD_URL}/trending/movie/week?api_key=${API_KEY}`,
    currentPage,
    pageSize
  );
  return movies;
};
