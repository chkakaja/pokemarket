import React from 'react';
import Peer from 'peerjs';

class VideoStreams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPeerId: window.location.hash.slice(1),
      outgoingPeer: {},
      incomingPeerId: ''
    }
  }

  componentWillMount() {
    this._startUserMedia();
    this._startPeer();
  }

  _startUserMedia() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (!navigator.getUserMedia) console.error('getUserMedia not supported');

    let constraints = { 
      audio: false, 
      video: { 
        width: 300 
      }
    };

    let successCb = (mediaStream) => {
      let video = document.querySelector('.outgoing-stream');
      video.src = window.URL.createObjectURL(mediaStream);
      video.onloadedmetadata = function(e) {
        video.play();
      };

      this._receiveCall(mediaStream);
    };

    let errorCb = (error) => {
      console.error(error);
    }

    navigator.getUserMedia(constraints, successCb, errorCb);
  }

  _startPeer() {
    let peerId = this.state.initialPeerId;
    let outgoingPeer = new Peer(peerId, {
      key: 'guyjtrwmc2yjsjor',
      debug: 3,
      logFunction: () => {
        var copy = Array.prototype.slice.call(arguments).join(' ');
        console.log(copy);
      }
    });

    this.setState({ outgoingPeer: outgoingPeer });

    outgoingPeer.on('open', function(id) {
      console.log('My outgoingPeer ID is: ' + id);
    });

    outgoingPeer.on('error', function(err) {
      console.log(err);
    });
  };

  _startCall(destPeerId) {
    let call = peer.call(destPeerId, mediaStream);
    this._receiveStream(call);
  }

  _receiveCall() {
    this.state.outgoingPeer.on('call', (call) => {
      call.answer(mediaStream);
      this._receiveStream(call);
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
              poster="http://dummyimage.com/450X345/000000/dadcfa.png&text=Awaiting+connection..."
            />
          </div>
          <div className="pure-u-1-2">
            <h3>Incoming</h3>
            <video 
              className="video incoming-stream" 
              poster="http://dummyimage.com/450X345/000000/dadcfa.png&text=Awaiting+connection..."
            />
          </div>
        </div> 
      </div>
    )
  }
}

export default VideoStreams;