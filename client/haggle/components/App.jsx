import React from 'react';

import VideoStreams from './VideoStreams.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="haggle-app">
        <h1 className="title">PokeMarket Video Chat</h1>
        <VideoStreams />
      </div>
    )
  }
}

export default App;