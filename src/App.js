import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Contacts from './pages/Contacts/Contacts';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
};

export default App;
