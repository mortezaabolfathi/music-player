import React from "react";

const SongListItem = ({ song , setCurrentSong, songS, setSongS}) => {


    const songSelect = ( song ) => {
        const selectedSong = songS.filter ( (item) => item.id===song )
        setCurrentSong(selectedSong)

        const newSong=songS.map((item) => {
            if(item.id === song){
                return {
                      ...item, active:true
                }
            } else {
                return{
                    ...item, active:false
                }
            }
        })

        setSongS(newSong)
    }

  return (
    <div className={`song-item  ${song.active ? "song-item-active":""}`}  onClick={()=>songSelect(song.id)}>
        <div className="box-image">
            <img src={song.cover} alt="image Artis"/>
        </div>
      <div className="song-item-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default SongListItem;
