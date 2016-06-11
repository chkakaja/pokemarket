import React from 'react';

class VideoStreams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPeerId: window.location.hash.slice(1)
    }
  }

  componentWillMount() {

  }

  _startUserMedia() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (!navigator.getUserMedia) console.error('getUserMedia not supported');

    let constraints = { 
      audio: false, 
      video: { 
        width: 400, 
        height: 400 
      }
    };

    let successCb = (mediaStream) => {
      let video = document.querySelector('.outgoing-stream');
      video.src = window.URL.createObjectURL(mediaStream);
      video.onloadedmetadata = function(e) {
        video.play();
      };

      receiveCall(mediaStream);
      window.mediaStream = mediaStream;
    };

    let errorCb = (error) => {
      console.error(error);
    }

    navigator.getUserMedia(constraints, successCb, errorCb);
  }

  _startPeer() {
    peer = new Peer(this.state.initialPeerId, {
      key: 'guyjtrwmc2yjsjor',
      debug: 3,
      logFunction: () => {
        var copy = Array.prototype.slice.call(arguments).join(' ');
        $('.log').append(copy + '<br>');
      }
    });

    peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
    });

    peer.on('error', function(err) {
      console.log(err);
    });
  };

  _startCall(destPeerId) {
    let call = peer.call(destPeerId, mediaStream);
    receiveStream(call);
  }

  _receiveCall() {
    peer.on('call', function(call) {
      call.answer(mediaStream);
      receiveStream(call);
    });
  }

  _receiveStream(call) {
    call.on('stream', function(incomingStream) {
      console.log('Receiving stream');

      let video = document.querySelector('.incoming-stream');
      video.src = window.URL.createObjectURL(mediaStream);
      video.onloadedmetadata = function(e) {
        video.play();
      };
    });
  }

  render() {
    return (
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
  }
}

export default VideoStreams;