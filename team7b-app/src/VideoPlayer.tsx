import React from 'react';
import './VideoPlayer.css';

interface VideoPlayerProps {
  videoSource: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSource }) => {
  return (
    <div className="video-player">
      <video controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
