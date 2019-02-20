import React, { Component } from 'react';
import VideoAutoplay from './VideoAutoplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <video id="videoTag" autoPlay muted playsInline width="500px">
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        </video>
        
        <VideoAutoplay id="VideoAutoplay" autoPlay muted playsInline width="500px">
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        </VideoAutoplay>
      </div>
    );
  }
}

export default App;
