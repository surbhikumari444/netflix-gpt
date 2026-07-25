import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.imdbID} posterPath={movie.Poster} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
