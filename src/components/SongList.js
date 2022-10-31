import React from "react";
import SongListItem from "./SongListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SongList = ({ songS, setCurrentSong, setSongS, displaySong, setDisplaySong}) => {
  // console.log(songS)
  return (
    <div className={`song-list ${displaySong ? "" : "display-song-List"}`}>
      <div className="head-song-List">
        <h2>List Song</h2> 
        <button  onClick={() => setDisplaySong(!displaySong)}>Back Player</button>
      </div>
      <div className="song-list-item">
        {songS.map((song) => (
          <SongListItem
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            songS={songS}
            setSongS={setSongS}
          />
        ))}
      </div>
    </div>
  );
};

export default SongList;
