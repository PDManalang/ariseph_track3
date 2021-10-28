import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Component
import Header from './Header';
import createAnnounce from './announcement/createAnnounce';
import AnnounceDetails from './announcement/announceDetails';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <Switch>
          <Route path='/' component={Dashboard} exact/>
          <Route path='/create' component={createAnnounce} />
          <Route path='/project/:id' component={AnnounceDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
