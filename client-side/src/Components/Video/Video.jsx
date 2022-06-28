// STYLES
import "./Video.css";

// HOOKS
import { useRef, useState } from "react";

// COMPONENTS
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";

const Video = ({ url, song, user, description, likes, shares, messages }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const touchTheVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={touchTheVideo}
        loop
        className="video__player"
        src={url}
      ></video>

      <VideoFooter song={song} user={user} description={description} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
