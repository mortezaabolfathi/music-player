import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const ToggleSong = ({ setDisplaySong, displaySong }) => {
  return (
    <nav>
      <h2>Wave</h2>
      <button className="" onClick={() => setDisplaySong(!displaySong)}>
        <span>Song List</span>
        <FontAwesomeIcon style={{paddingLeft:"10px"}} icon={faMusic} />
      </button>
    </nav>
  );
};

export default ToggleSong;
