import React from 'react'

import audiofile from './Ukulele.mp3'

class Audio extends React.Component {
  constructor(props) {
    super(props);
  	this.state={
       song: "whistle"
      }
  
      this.playAudio = () => {
        this.whistle.play();
      }
      this.pauseAudio = () => {
        this.whistle.pause();
      }
	  
  }
  render() {
    return (
      <div className="stage">
		<audio className='music-button' ref={(whistle) => { this.whistle = whistle; }}>
			<source src={audiofile} type="audio/mpeg" >
			</source>
		</audio>

		
			
      <button className="btn btn-info" onClick={this.playAudio}>play music</button>
      <button className="btn btn-info" onClick={this.pauseAudio}>pause</button>

      </div>
    );
  }
}



export default Audio;