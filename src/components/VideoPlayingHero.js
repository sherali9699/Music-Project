// VideoPlayingHero.js

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import videoThumbnail from '../assets/images/video-thumbnail.webp'; // Poster image
import sampleVideo from '../assets/videos/music-video.mp4'; // Video file

const VideoPlayingHero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      if (isMuted) {
        videoRef.current.muted = true;
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const handleVideoEnd = () => {
      console.log('Video ended');
      setIsPlaying(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      console.log('Video paused and currentTime reset');
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  useEffect(() => {
    console.log('isPlaying:', isPlaying);
    console.log('isMuted:', isMuted);
  }, [isPlaying, isMuted]);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={sampleVideo}
        poster={videoThumbnail}
        controls={false}
        autoPlay
        muted={isMuted}
      />
      <div className="controls">
        <button onClick={togglePlayPause}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button onClick={toggleMute}>
          <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayingHero;
