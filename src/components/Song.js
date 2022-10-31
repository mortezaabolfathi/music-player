import React from "react";


const Song = ({ currentSong }) => {
  // console.log(currentSong);
  return (
    <div className="song-container">
      {currentSong.map((item) => {
        return (
          <div className="c-song-music" key={item.id}>
            <div className="c-song-img">
              <img src={item.cover} alt="image-cover" />
            </div>

            <p className="c-song-nameMusic">{item.name}</p>

            <p className="c-song-nameArtist">{item.artist}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Song;
