import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.nowPlaying);
    const trailerVideo = useSelector(
    (store) => store.movie.trailerVideo
  );
    if (!movies) return null;
    console.log(movies);
     const mainMovie = movies[0];
     const { Title } = mainMovie;
  return (
     <div className="pt-[30%] bg-black md:pt-0">
       <VideoTitle
        title={Title}
        description={trailerVideo?.snippet?.description || "No description available"}
      />
      <VideoBackground movieTitle={Title} />
    </div>
  )
}

export default MainContainer