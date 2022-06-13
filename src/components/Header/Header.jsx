import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = (props) => {
  let isPlaying = useSelector((state) => state.player.isPlaying);
  let currentTrack = useSelector((state) => state.player.url);
  let currentTitle = useSelector((state) => state.player.title);
  return (
    <header>
      <div className={styles.headerMiddle}>
        <div className={styles.musicPlayerBlock}>
          {isPlaying ? (
            <div>
              <div>{currentTitle}</div>
              <ReactPlayer url={currentTrack} controls={true} height="40px" width="370px" playing={true} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.loginBlock}>
          {props.isAuth ? (
            <div>
              <span className={styles.userloginName}>{props.login}</span>
              <button onClick={props.logout} className={styles.logoutBtn}>
                Log Out
              </button>
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
