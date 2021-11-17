import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import React from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Profile />
      <Dialogs />
    </div>
  );
}

export default App;
