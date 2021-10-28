import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Component
import Header from './Header';
import Dashboard from './Dashboard';
import createAnnounce from './announcement/createAnnounce';
import AnnounceDetails from './announcement/announceDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <Route path='/' component={Header} exact/>
          <Route path='/' component={Dashboard} exact/>
          <Route path='/create' component={createAnnounce} />
          <Route path='/project/:id' component={AnnounceDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
