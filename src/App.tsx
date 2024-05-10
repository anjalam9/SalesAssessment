import React from 'react';
import './App.css';
import HomeLayout from './components/HomeLayout/HomeLayout';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <HomeLayout />
    </div>
  );
}

export default App;
