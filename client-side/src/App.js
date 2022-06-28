import "./App.css";

// COMPONENTS
import { Video } from "./Components";

// HOOKS
import { useEffect, useState } from "react";

// AXIOS
import axios from "./utils/axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/v2/posts");
      setData(res.data);

      return res;
    };
    fetchPosts();
  }, []);

  console.log(data);
  return (
    <div className="App">
      <div className="app__videos">
        {data.map((video) => (
          <Video
            url={video.url}
            song={video.song}
            user={video.user}
            description={video.description}
            likes={video.likes}
            shares={video.shares}
            messages={video.messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
