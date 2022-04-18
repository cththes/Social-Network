import React from "react";
import track1 from "./../../assets/music/Mark Morgan - Khans Of The New California.mp3";
import track2 from "./../../assets/music/Lorn - PERFEKT DARK.mp3";
import track3 from "./../../assets/music/BLVCK CEILING - End of Time.mp3";
import track4 from "./../../assets/music/Burial - Pirates.mp3";
import track5 from "./../../assets/music/Natalie Merchant - San Andreas Fault.mp3";
import Track from "./Track/Track";

//"Mark Morgan - Khans Of The New California"
const Music = () => {
  return (
    <div>
      <Track track={track1} name="Mark Morgan - Khans Of The New California"/>
      <Track track={track2} name="Lorn - PERFEKT DARK"/>
      <Track track={track3} name="BLVCK CEILING - End of Time"/>
      <Track track={track4} name="Burial - Pirates"/>
      <Track track={track5} name="Natalie Merchant - San Andreas Fault"/>
    </div>
  );
};

export default Music;
