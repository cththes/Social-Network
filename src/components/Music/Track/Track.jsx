import React from 'react'
import ReactPlayer from "react-player";

const Track = (props) => {
  return (
   <div>
   <div>{props.name}</div>
   <ReactPlayer
     url={props.track}
     playing={false}
     controls={true}
     height="40px"
   />
 </div>
  )
}

export default Track