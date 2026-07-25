import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OMDB_API_KEY } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent("marvel")}`
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.Search));
    console.log(data);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};