import "./App.css";
import { Video } from "./Components";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          url={
            "https://firebasestorage.googleapis.com/v0/b/shorturl-phototourl.appspot.com/o/message%2F3690244763%2Fimage?alt=media&token=d981c918-be27-4176-a07f-ca66063ea71a"
          }
          song={"Charlie"}
          user={"Ulugbek"}
          description={"This is a description"}
          likes={200}
          shares={300}
          messages={400}
        />
        <Video
          url={
            "https://firebasestorage.googleapis.com/v0/b/shorturl-phototourl.appspot.com/o/message%2F3690244763%2Fimage?alt=media&token=d981c918-be27-4176-a07f-ca66063ea71a"
          }
        />
      </div>
    </div>
  );
}

export default App;
