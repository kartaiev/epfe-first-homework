import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Team from './Pages/Team/Team';
import Contacts from './Pages/Contacts/Contacts';

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
