import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = (props) => {
  let isPlaying = useSelector((state) => state.player.isPlaying);
  let currentTrack = useSelector((state) => state.player.url);
  let currentTitle = useSelector((state) => state.player.title);
  let isBigTitleSize = true;
  currentTitle.length > 50 && (isBigTitleSize = false);
  return (
    <header>
      <div className={styles.headerMiddle}>
        <div className={styles.musicPlayerBlock}>
          {isPlaying ? (
            <div>
              <div className={isBigTitleSize ? styles.bigTitleSize : styles.smallTitleSize}>{currentTitle}</div>
              <ReactPlayer
                url={currentTrack}
                controls={true}
                height="30px"
                width="vmax"
                playing={true}
                changePlaybackRate={false}
                config={{ file: { attributes: { controlsList: "noplaybackrate nodownload nofullscreen" } } }}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.loginBlock}>
          {props.isAuth ? (
            <div>
              <span className={styles.userloginName}>{props.login}</span>
              <div>
                <button onClick={props.logout} className={styles.logoutBtn}>
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <NavLink to={"/login"} className={styles.navLogin}>
              Login
            </NavLink>
          )}
        </div>
        <div className={styles.headerlogout}></div>
      </div>
    </header>
  );
};

export default Header;

/* <button onClick={props.switchTheme}>{props.darkTheme ? "Light Theme" : "Dark Theme"}</button>*/
