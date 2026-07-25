import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    movies.nowPlaying && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
          <MovieList title={"Trending"} movies={movies.nowPlaying} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
