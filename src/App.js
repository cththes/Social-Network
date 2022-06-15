import React, { Component, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/redux-store";

import { initializeApp } from "./redux/app-reducer";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Preloader from "./components/Common/Preloader/Preloader";
import Settings from "./components/Settings/Settings";
import { getProfile } from "./redux/profile-selector";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    let isDark = this.props.isDark;
    return (
      <div className="app">
        <div className={isDark ? "app_dark" : "app_light"}>
          <HeaderContainer />
          <div className="app-wrapper">
            <Navbar />
            <div className="app-wrapper-content">
              <Suspense fallback={<Preloader />}>
                <Routes>
                  <Route element={<ProfileContainer profile={this.props.profile} />} path="profile" />
                  <Route element={<Login />} path="login" />
                  <Route element={<ProfileContainer profile={this.props.profile} />} path="profile/:userId" />
                  <Route element={<DialogsContainer profile={this.props.profile} />} path="dialogs/*" />
                  <Route path="news" />
                  <Route element={<Music />} path="music" />
                  <Route element={<Settings />} path="settings" />
                  <Route element={<UsersContainer />} path="users/*" />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  profile: getProfile(state),
  isDark: state.settings.isDark,
});

let AppContainer = compose(connect(mapStateToProps, { initializeApp }))(App);

const SocialNetworkApp = () => {
  return (
    <Router>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Router>
  );
};

export default SocialNetworkApp;
