import * as React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './common/header/header';
import Home from './features/home/home';

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
