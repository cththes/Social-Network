import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchThemeActionCreator } from "../../redux/settings-reducer";

const Settings = () => {
  let isDark = useSelector((state) => state.settings.isDark);
  const dispatch = useDispatch();
  let darkThemeSwitch = () => {
    dispatch(switchThemeActionCreator());
  };
  return (
    <div>
      Settings
      <div>
        <button onClick={darkThemeSwitch}>{isDark ? <span>Light Theme</span> : <span>Dark Theme</span>}</button>
      </div>
    </div>
  );
};

export default Settings;
