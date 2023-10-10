
import React from 'react'
import ReactPlayer from 'react-player'

interface props {
 vid: File
}

const VideoReview = ({ vid}: props) => {
  const url = URL.createObjectURL(vid)
  return (
    <div className='w-full h-[12.625rem] max-h-[12.625rem] mt-4 '>
     <ReactPlayer url={url} width='100%' height='100%' controls={true} style={{
      width: '100%',
      height: '100%',
     }} />
    </div>
  )
}

export default VideoReview