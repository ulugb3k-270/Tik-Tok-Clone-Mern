// STYLES
import "./VideoSidebar.css";

// ICONS
import { Favorite, FavoriteBorder, Message, Share } from "@material-ui/icons";

// HOOKS
import { useState } from "react";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="VideoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <Favorite fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={() => setLiked(true)} />
        )}
        <p>{(liked ? likes + 1 : likes) || 0}</p>
      </div>
      <div className="videoSidebar__button">
        <Message fontSize="large" />
        <p>{messages || 0}</p>
      </div>
      <div className="videoSidebar__button">
        <Share fontSize="large" />
        <p>{shares || 0}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
