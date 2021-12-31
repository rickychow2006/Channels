import React from 'react';
import Splash from './splash/splash';
import Navbar from './navbar/navbar';
import { Switch } from 'react-router-dom';
import SignUpForm from './session_form/signup_form';

const App = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <Switch>
        <SignUpForm path='/signup'/>
        <Splash exact path='/' />
      </Switch>
    </div>
  )
};

export default App;