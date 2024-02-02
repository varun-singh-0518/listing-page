const MoviesList = ({movies}) => {
  console.log(movies);
  return (
    <div className=" mt-8 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => {
        return (
          <div
            key={Math.random()}
            className="max-w-xs rounded overflow-hidden shadow-gray-900 shadow-lg"
          >
            <img
              className="w-full"
              src={`https://image.tmdb.org/t/p/w500${movie.image}`}
              alt="movieImage"
            />
            <div className="p-2">
              <p className="font-bold text-[#003049] text-xl mb-2">
                {movie.name}
              </p>
              <p className=" text-base text-[#3a5a40]">
                Ratings : {movie.popularity}⭐
              </p>
              <p className="text-base text-[#3a5a40]">{movie.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
