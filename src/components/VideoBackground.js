import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieTitle }) => {
  useMovieTrailer(movieTitle);

  const trailerVideo = useSelector(
    (store) => store.movie.trailerVideo
  );

  if (!trailerVideo) return null;
  console.log(trailerVideo);
  const videoId = trailerVideo.id.videoId;

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};

export default VideoBackground;