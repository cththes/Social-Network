import React, { useState } from "react";
import ReactPlayer from "react-player";
import { playMusic } from "../../redux/player-reducer";
import track1 from "./../../assets/music/Mark Morgan - Khans Of The New California.mp3";
import track2 from "./../../assets/music/Lorn - PERFEKT DARK.mp3";
import track3 from "./../../assets/music/BLVCK CEILING - End of Time.mp3";
import track4 from "./../../assets/music/Burial - Pirates.mp3";
import track5 from "./../../assets/music/Natalie Merchant - San Andreas Fault.mp3";
import { connect } from "react-redux";

const Music = (props) => {
  let [isPlaying, setPlaying] = useState(false);
  let [currentTrack, setCurrentTrack] = useState(0);
  let onPlayerClick = (url) => {
    playMusic(url);
    setPlaying(true);
    setCurrentTrack(props.url);
  };
  return (
    <div>
      <div>
        <span onClick={onPlayerClick}>Mark Morgan - Khans Of The New California</span>
      </div>
      <div>
        <span onClick={onPlayerClick}>Lorn - PERFEKT DARK</span>
      </div>
      <div>
        <span onClick={onPlayerClick}>BLVCK CEILING - End of Time</span>
      </div>
      <div>
        <span onClick={onPlayerClick}>Burial - Pirates</span>
      </div>
      <div>
        <span onClick={onPlayerClick}>Natalie Merchant - San Andreas Fault </span>
      </div>
      {isPlaying ? (
        <ReactPlayer
          url={currentTrack}
          controls={true}
          height="40px"
          width="30%"
          playing={true}
          config={{
            file: {
              tracks: [track1, track2, track3, track4, track5],
            },
          }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    url: state.player.url,
  };
};

export default connect(mapStateToProps)(Music);
