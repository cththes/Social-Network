import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
            path="profile"
          />
          <Route
            element={
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            }
            path="dialogs/*"
          />
          <Route path="news" />
          <Route path="music" />
          <Route path="settings" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
