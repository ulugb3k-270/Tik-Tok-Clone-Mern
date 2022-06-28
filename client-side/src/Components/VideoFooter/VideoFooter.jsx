// STYLES
import "./VideoFooter.css";

// ICONS
import { MusicNote } from "@material-ui/icons";

const VideoFooter = ({ song, user, description }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{user || "unknown"}</h3>
        <p>{description || ""}</p>
        <div className="videoFooter__ticker">
          <MusicNote className="videoFooter__icon" />
          <p>{song || "unknow"}</p>
        </div>
      </div>

      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        className="videoFooter__record"
        alt=""
      />
    </div>
  );
};

export default VideoFooter;
