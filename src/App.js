  
import React, { useState } from 'react';
import './App.css';
import { FaPlay} from 'react-icons/fa';
import { FaStop} from 'react-icons/fa';

function App() {
  const [playing, setPlaying] = useState(false);

	const HEIGHT = 250;
	const WIDTH = 250;

	const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};
  return (
    <div className="app">
      <h3>MY WEBCAM</h3>
      <div className="app_conatiner">
      <video 
					height={HEIGHT}
					width={WIDTH}
					muted
					autoPlay
					className="app__videoFeed"
				></video>
      </div>
      <div className="app__input">
				{playing ? (
					<button className="app__input__btn" onClick={stopVideo}><FaStop size={24} /></button>
				) : (
					<button className="app__input__btn" onClick={startVideo}><FaPlay size={24} /></button>
				)}
			</div>
    </div>
  );
}

export default App;
