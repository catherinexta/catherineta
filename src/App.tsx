import * as React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';
import About from './features/about/about';
import Header from './common/header/header';
import Home from './features/home/home';
import NotFound from './common/routes/not-found';
import Portfolio from './features/portolio/portolio';
import Resume from './features/resume/resume';

const App: React.SFC = () => (
  <div className="App">
    <Header />

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
);

export default App;
