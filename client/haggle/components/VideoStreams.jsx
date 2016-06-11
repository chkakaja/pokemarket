import React from 'react';

const VideoStreams = () => (
  <div className="video-streams">
    <div className="pure-g">
      <div className="pure-u-1-2">
        <h3>Outgoing</h3>
        <video 
          className="video outgoing-stream" 
          poster="http://dummyimage.com/450X300/000000/dadcfa.png&text=Awaiting+connection..."
        />
      </div>
      <div className="pure-u-1-2">
        <h3>Incoming</h3>
        <video 
          className="video incoming-stream" 
          poster="http://dummyimage.com/450X300/000000/dadcfa.png&text=Awaiting+connection..."
        />
      </div>
    </div> 
  </div>
)

export default VideoStreams;