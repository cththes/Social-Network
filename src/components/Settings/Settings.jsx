import React, { useState } from "react";

const Settings = () => {
  let [isDark, setTheme] = useState(false);
  let darkThemeSwitch = () => {
    setTheme(!isDark);
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
