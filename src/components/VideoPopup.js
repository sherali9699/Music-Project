import React from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css"; // Ensure correct path to Fancybox CSS
import "../assets/css/VideoPopup.css"; // Ensure correct path to VideoPopup CSS
import { Fancybox } from "@fancyapps/ui"; // Import Fancybox from @fancyapps/ui
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoPopup = () => {
    // Define the poster and video URLs
    // const posterUrl = '../assets/images/video-thumbnail.png'; // Example path to poster image
    const videoUrl = 'https://www.youtube.com/watch?v=4o4RVJov6oE'; // Example path to video file

    // Function to handle opening the video in Fancybox
    const openVideo = (event) => {
        event.preventDefault(); // Prevent default anchor tag behavior
        Fancybox.show([
            {
                src: videoUrl,
                type: 'video', // Specify the type of content (video)
                opts: {
                    toolbar: false, // Disable toolbar (optional)
                    speed: 300, // Animation speed (optional)
                    // Add options for Fancybox here
                }
            }
        ]);
    };

    return (
        <div className="poster-container">
            <div className="poster-overlay"></div>
            <a
                href={videoUrl}
                className="play-button"
                onClick={openVideo} // Call openVideo function on click
            >
                <FontAwesomeIcon icon={faPlay} className="play-icon" />
            </a>
        </div>
    );
};

export default VideoPopup;
