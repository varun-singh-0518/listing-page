import {useState, useEffect} from "react";
import MoviesList from "./components/MoviesList";
import {fetchMovies} from "./functions/getMovies";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      const moviesData = await fetchMovies(currentPage);
      setMovies(moviesData);
    };
    fetch();
  }, [currentPage]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container pl-8 ">
      <h1 className="mt-4 text-5xl text-center text-[#4e1a7c] font-extrabold uppercase">
        Movie App
      </h1>
      <MoviesList movies={movies} />
      <Stack spacing={2} direction="row" justifyContent="center" mt={4}>
        <Pagination
          size="large"
          count={10}
          page={currentPage}
          onChange={handlePageChange}
          color="secondary"
        />
      </Stack>
    </div>
  );
};

export default App;
