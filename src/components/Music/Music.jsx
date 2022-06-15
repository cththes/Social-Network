import styles from "./Music.module.scss";
import { playMusicActionCreator } from "../../redux/player-reducer";
import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Music = () => {
  const dispatch = useDispatch();
  let onPlayerClick = (currentTrack) => {
    dispatch(playMusicActionCreator(currentTrack));
  };
  let isDark = useSelector((state) => state.settings.isDark);
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
  return <div className={isDark ? styles.playerDark : styles.playerLight}>{musicElements}</div>;
};

let mapStateToProps = (state) => {
  return {
    url: state.player.url,
  };
};

export default connect(mapStateToProps)(Music);
