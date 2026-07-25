import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_API_KEY } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieTitle) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieTitle) return;

    const getMovieTrailer = async () => {
      const query = `${movieTitle} official trailer`;

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
          query
        )}&type=video&videoEmbeddable=true&key=${YOUTUBE_API_KEY}`
      );

      const data = await response.json();

      dispatch(addTrailerVideo(data.items?.[0] || null));
    };

    getMovieTrailer();
  }, [dispatch, movieTitle]);
};

export default useMovieTrailer;