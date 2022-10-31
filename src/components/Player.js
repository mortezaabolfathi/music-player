import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying, songS, setCurrentSong, setSongS}) => {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    if(currentTime===duration){
      skipSong("next")
      playMusic()
    }
    setSongInfo({ ...songInfo, currentTime: currentTime, duration: duration });
  };

  const timeFormat = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime=e.target.value
    setSongInfo({...songInfo, currentTime:e.target.value})
  };

  const skipSong = (dir) => {
    const currentIndex=songS.findIndex((item) => item.id===currentSong[0].id)
    if(dir==="next"){
      if(currentIndex===(songS.length-1)){
        setCurrentSong([songS[0]])
      }else{
        setCurrentSong([songS[currentIndex+1]])
      }
      console.log(currentSong)
    }
    if(dir==="back"){
      if(currentIndex===0){
        setCurrentSong([songS[songS.length-1]])
      }else{
        setCurrentSong([songS[currentIndex-1]])
      }
    }
  }

  useEffect(() => {
    const newSong=songS.map((item) => {
      if(item.id === currentSong[0].id){
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

  },[currentSong])

  return (
    <div className="player">
      <div className="time-control">
        <p>{timeFormat(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{timeFormat(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faBackwardStep}
          onClick={()=>skipSong("back")}
        />
        <FontAwesomeIcon
          onClick={() => playMusic()}
          className="Play"
          size="3x"
          icon={isPlaying? faPause:faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faForwardStep}
          onClick={()=>skipSong("next")}
        />
      </div>
      {currentSong.map((item) => {
        return (
          <audio
            key={item.id}
            onLoadedMetadata={timeUpdateHandler}
            onTimeUpdate={timeUpdateHandler}
            ref={audioRef}
            src={item.audio}
          ></audio>
        );
      })}
    </div>
  );
};

export default Player;
