import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

//CSS
import './css/App.css';

//Component
import Header from './Header';
import Dashboard from './Dashboard';
import createAnnounce from './post/createAnnounce';
import AnnounceDetails from './post/announceDetails';
import Archive from './archive/Archive'
import SignIn from '../src/auth/SignIn'
import SignUp from './auth/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <ReactNotification />
          <Switch>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/create' component={createAnnounce} />
            <Route path='/project/:id' component={AnnounceDetails} />
            <Route path='/archive'component={Archive} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
