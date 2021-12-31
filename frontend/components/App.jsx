import React from 'react';
import Splash from './splash/splash';
import Navbar from './navbar/navbar';

const App = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <Splash />
    </div>
  )
};

export default App;