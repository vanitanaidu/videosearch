import React from 'react'
import VideoListItem from './each_video_on_list'

const VideoList = (props) => {

    return(
      <ul className="col-md-4 list-group">
        {props.videos.length}
      </ul>
    )


}
export default VideoList
