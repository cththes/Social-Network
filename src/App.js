import React from "react";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route element={<ProfileContainer />} path="profile/*" />
          <Route element={<DialogsContainer />} path="dialogs/*" />
          <Route element={<UsersContainer />} path="users/*" />
          <Route path="news" />
          <Route path="music" />
          <Route path="settings" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
