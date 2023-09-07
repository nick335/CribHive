
import React from 'react'
import ReactPlayer from 'react-player'

interface props {
 vid: any
}

const VideoReview = ({ vid}: props) => {
  return (
    <div className='w-full h-[12.625rem] max-h-[12.625rem] mt-4 '>
     <ReactPlayer url={vid} width='100%' height='100%' controls={true} style={{
      width: '100%',
      height: '100%',
     }} />
    </div>
  )
}

export default VideoReview