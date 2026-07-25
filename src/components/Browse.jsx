import React from 'react'
import Headers from './Header'
import { useNowPlayingMovies } from '../hooks/useNowplayingMovie'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {

  useNowPlayingMovies();
  

  return (
    
    <div>
      <Headers />
       <>
          <MainContainer />
          <SecondaryContainer />
        </>
      </div>
  )
}

export default Browse;