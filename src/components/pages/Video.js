import React from 'react';
import '../../App.css';
import ReactPlayer from "react-player";

function Video() {
  return <div className="video">

    <div className="video-player">
      <p><ReactPlayer url="https://www.youtube.com/watch?v=CDXiz_1V9gk" /></p>
      <div>
        <h6>Keep Me out feature video created using <a href="https://www.adobe.com/in/products/aftereffects.html">After Effects</a></h6>
      </div>
    </div>
  </div>
}

export default Video;