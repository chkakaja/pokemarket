import React from 'react';
import Peer from 'peerjs';
import queryString from 'query-string';
window.Peer = Peer;

class VideoStreams extends React.Component {
  constructor(props) {
    super(props);
    let { init, id } = queryString.parse(window.location.search);

    this.state = {
      isInitial: init === '1',
      initialPeerId: id,
      outgoingPeer: {},
      outgoingStream: null
    }
  }

  componentDidMount() {
    this._startPeer();
    this._startUserMedia();
  }

  _startUserMedia() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (!navigator.getUserMedia) console.error('getUserMedia not supported');

    let constraints = { 
      audio: false, 
      video: { 
        width: 450 
      }
    };

    let successCb = (mediaStream) => {
      let video = document.querySelector('.outgoing-stream');
      video.src = window.URL.createObjectURL(mediaStream);
      video.onloadedmetadata = function(e) {
        video.play();
      };

      this.setState({ outgoingStream: mediaStream });
      this._receiveCall(this.state.outgoingPeer);

      if (!this.state.isInitial) this._startCall();
    };

    let errorCb = (error) => {
      console.error(error);
    }

    navigator.getUserMedia(constraints, successCb, errorCb);
  }

  _startPeer() {
    let peerConfig = {
      key: 'guyjtrwmc2yjsjor',
      debug: 3
    }

    let outgoingPeer;
    if (this.state.isInitial) {
      outgoingPeer = new Peer(this.state.initialPeerId, peerConfig);
    } else {
      outgoingPeer = new Peer(peerConfig);
    }

    this.setState({ outgoingPeer: outgoingPeer });

    outgoingPeer.on('open', function(id) {
      console.log('My outgoingPeer ID is: ' + id);
    });
  };

  _startCall() {
    let call = this.state.outgoingPeer.call(this.state.initialPeerId, this.state.outgoingStream);
    this._receiveStream(call);
  }

  _receiveCall(outgoingPeer) {
    this.state.outgoingPeer.on('call', (call) => {
      call.answer(this.state.outgoingStream);
      this._receiveStream(call);
    });
  }

  _receiveStream(call) {
    call.on('stream', function(incomingStream) {
      console.log('Receiving stream');

      let video = document.querySelector('.incoming-stream');
      video.src = window.URL.createObjectURL(incomingStream);
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