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
                posts={props.state.profilePage.posts}
                newPostText={props.state.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
            path="profile"
          />
          <Route
            element={
              <Dialogs
                newMessageText={props.state.dialogsPage.newMessageText}
                state={props.state.dialogsPage}
                sendMessage={props.sendMessage}
                updateNewMessageText={props.updateNewMessageText}
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
