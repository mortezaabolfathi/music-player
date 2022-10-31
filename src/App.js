import React, { useState } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";
import allMusic from "./data";
import SongList from "./components/SongList";
import ToggleSong from "./components/TogleSong";

function App() {
  const [songS, setSongS] = useState(allMusic);
  const [currentSong, setCurrentSong] = useState([songS[0]]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displaySong, setDisplaySong] = useState(false);
  
  return (
    <div className="app">
      <ToggleSong setDisplaySong={setDisplaySong} displaySong={displaySong} />
      <div className="container" style={{background:`linear-gradient(to bottom, ${currentSong[0].color[0]},${currentSong[0].color[1]})`}}>
        <Song currentSong={currentSong} />
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setSongS={setSongS}
          songS={songS}
          setCurrentSong={setCurrentSong}
        />
      </div>
      <SongList 
      setDisplaySong={setDisplaySong}
        songS={songS}
        setCurrentSong={setCurrentSong}
        setSongS={setSongS}
        displaySong={displaySong}
      />
    </div>
  );
}

export default App;
