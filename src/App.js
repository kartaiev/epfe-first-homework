import React, { useEffect } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';

import Team from './pages/Team/Team';
import Member from './pages/Member/Member';
import { SliderProvider } from './contexts/SliderContext';

const App = () => {
  // // Commented for development purposes
  // // Remove comment when ready for production
  // const fadeOut = target => {
  //   const elem = target;
  //   const fadeEffect = setInterval(() => {
  //     if (!elem.style.opacity) {
  //       elem.style.opacity = 1;
  //     }

  //     if (elem.style.opacity > 0) {
  //       elem.style.opacity -= 0.1;
  //     } else {
  //       clearInterval(fadeEffect);
  //       elem.remove();
  //     }
  //   }, 50);
  // };

  // useEffect(() => {
  //   const element = document.querySelector('.loader');
  //   if (element) {
  //     setTimeout(() => {
  //       fadeOut(element);
  //     }, 2000);
  //   }
  // }, []);

  return (
    <>
      <Switch>
        <Route path="/team" component={Team} />
        <Route path="/member" component={Member} />
        <SliderProvider>
          <Route path="/" component={Home} exact />
        </SliderProvider>
      </Switch>
    </>
  );
};

export default App;
