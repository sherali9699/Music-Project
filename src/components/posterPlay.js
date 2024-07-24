import React, { useState, useRef, useEffect } from 'react';
import videoThumbnail from '../assets/images/video-thumbnail.webp'; // Importing the poster image
import sampleVideo from '../assets/videos/music-video.mp4'; // Importing the video file (updated path)
import '../assets/css/homepage.css'; // Importing the component's CSS file

const posterPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track if video is playing
  const [isMuted, setIsMuted] = useState(true); // State to track if video is muted
  const videoRef = useRef(null); // Ref to access the video element

  // Function to toggle play/pause of the video
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause(); // Pause the video if it's playing
    } else {
      videoRef.current.play(); // Play the video
      if (isMuted) {
        videoRef.current.muted = true; // Ensure video is muted if isMuted is true
      }
    }
    setIsPlaying(!isPlaying); // Toggle isPlaying state
  };

  // Function to toggle mute/unmute of the video
  const toggleMute = () => {
    videoRef.current.muted = !isMuted; // Toggle muted state of the video
    setIsMuted(!isMuted); // Toggle isMuted state
  };

  // Effect to handle video end event
  useEffect(() => {
    const handleVideoEnd = () => {
      console.log('Video ended');
      setIsPlaying(false); // Set isPlaying to false
      videoRef.current.pause(); // Pause the video
      videoRef.current.currentTime = 0; // Reset video to beginning
      console.log('Video paused and currentTime reset');
      console.log('Poster should display now:', videoRef.current.poster); // Log current poster
    };

    const videoElement = videoRef.current; // Get reference to video element
    videoElement.addEventListener('ended', handleVideoEnd); // Add event listener for video end

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd); // Clean up event listener on unmount
    };
  }, []); // Empty dependency array ensures effect runs only once

  // Effect to log isPlaying and isMuted states on change
  useEffect(() => {
    console.log('isPlaying:', isPlaying);
    console.log('isMuted:', isMuted);
  }, [isPlaying, isMuted]); // Dependency array watches isPlaying and isMuted changes

  return (
    <div className="home">
      <div className="video-container">
        <video
          ref={videoRef} // Reference to video element for controlling playback
          src={sampleVideo} // Source of the video file
          poster={videoThumbnail} // Poster image displayed before video starts playing
          controls={false} // Hide default video controls
          muted={isMuted} // Initial muted state of the video
          
        />
        <div className="controls">
          <button onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'} {/* Toggle play/pause button text based on isPlaying state */}
          </button>
          <button onClick={toggleMute}>
            {isMuted ? 'Unmute' : 'Mute'} {/* Toggle mute/unmute button text based on isMuted state */}
          </button>
        </div>
      </div>
      <div>
        <h2>posterplay</h2> {/* Placeholder text */}
      </div>
    </div>
  );
};

export default posterPlay;
