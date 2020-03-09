import React from 'react';
import './App.scss';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Contacts from './pages/Contacts/Contacts';

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
