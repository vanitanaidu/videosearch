import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading....</div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  // embed basically means taking a video from a website and posting it outside of its website. In this case, it is taking a video from you tube and posting it outside of youtube.

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
        // The IFrame HTML element is often used to insert content from another source, such as an advertisement or video, into a Web page.
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail
