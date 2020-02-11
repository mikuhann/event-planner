import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

import EventDashboard from './components/Event/EventDashboard';
import NavBar from './components/Nav/';
import EventDetailsPage from './components/Event/EventDetails';
import HomePage from './components/Home';
import UsersDashboardPage from './components/Users/UsersDashboard/UsersDashboardPage';
import UserDetailsPage from './components/Users/User/UserDetailsPage';
import DashboardSettingsPage from './components/Users/Settings/DashboardSettingsPage';
import EventForm from './components/Event/EventForm';

import { Routes } from './constants/Routes';

import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <Switch>
          <Route exact path={ Routes.HOME } component={ HomePage } />
          <Route exact path={ Routes.EVENTS } component={ EventDashboard } />
          <Route exact path={ Routes.EVENT } component={ EventDetailsPage } />
          <Route exact path={ Routes.PROFILES } component={ UsersDashboardPage } />
          <Route exact path={ Routes.PROFILE } component={ UserDetailsPage } />
          <Route exact path={ Routes.SETTINGS } component={ DashboardSettingsPage } />
          <Route exact path={ Routes.CREATE_EVENT } component={ EventForm } />
        </Switch>
      </Container>
    </>
  );
}

export default App;
