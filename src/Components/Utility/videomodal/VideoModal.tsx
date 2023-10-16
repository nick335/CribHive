import React from 'react'
import ReactPlayer from 'react-player'
import { HiMiniXMark } from 'react-icons/hi2'


interface props {
 vid: any
 close: () => void 
}

const VideoModal = ({ vid, close }: props) => {
  return (
    <div className='fixed top-0 left-0 flex items-center justify-center bg-black z-[100] w-screen h-screen '>
     <HiMiniXMark onClick={close} className='w-11 h-11 text-error fixed top-4 right-6 z-[101] cursor-pointer '/>
     <div className='w-[98%] aspect-video bg-white overflow-hidden max-w-[46.875rem]'>
      <ReactPlayer 
       width={'100%'}
       height={'100%'}
       controls
       playing={true}
       url={vid}
       onEnded={close}
      />
     </div>
    </div>
  )
}

export default VideoModal