import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Routes, Route } from "react-router-dom";

import { initializeApp } from "./redux/app-reducer";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer, {
  withRouter,
} from "./components/Profile/ProfileContainer";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route element={<ProfileContainer />} path="profile" />
            <Route element={<Login />} path="login" />
            <Route element={<ProfileContainer />} path="profile/:userId" />
            <Route element={<DialogsContainer />} path="dialogs/*" />
            <Route element={<UsersContainer />} path="users/*" />
            <Route path="news" />
            <Route element={<Music />} path="music" />
            <Route path="settings" />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)