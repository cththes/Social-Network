import styles from "./Music.module.scss";
import { playMusicActionCreator } from "../../redux/player-reducer";
import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Music = () => {
  const dispatch = useDispatch();
  let onPlayerClick = (currentTrack) => {
    dispatch(playMusicActionCreator(currentTrack));
  };

  let musicElements = useSelector((state) =>
    state.player.music.map((track) => (
      <div>
        <NavLink
          to="/music"
          onClick={() => {
            onPlayerClick(track);
          }}
        >
          {track.title}
        </NavLink>
      </div>
    ))
  );
  return <div className={styles.player}>{musicElements}</div>;
};

let mapStateToProps = (state) => {
  return {
    url: state.player.url,
  };
};

export default connect(mapStateToProps)(Music);
