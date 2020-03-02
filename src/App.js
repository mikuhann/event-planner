import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import EventDashboard from './components/Event/EventDashboard';
import NavBar from './components/Nav/';
import EventDetailsPage from './components/Event/EventDetails';
import HomePage from './components/Home';
import UsersDashboardPage from './components/Users/UsersDashboard/UsersDashboardPage';
import UserDetailsPage from './components/Users/User/UserDetailsPage';
import DashboardSettingsPage from './components/Users/Settings/DashboardSettingsPage';
import EventForm from './components/Event/EventForm';

import { Routes } from './constants/Routes';
import store from './redux/store';

import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Provider store={store}>
      <>
        <Route exact path={ Routes.HOME } component={ HomePage } />
        <Route path='/(.+)' render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Switch>
                <Route path={ Routes.EVENTS } component={ EventDashboard } />
                <Route path={ Routes.EVENT } component={ EventDetailsPage } />
                <Route path={ Routes.PROFILES } component={ UsersDashboardPage } />
                <Route path={ Routes.PROFILE } component={ UserDetailsPage } />
                <Route path={ Routes.SETTINGS } component={ DashboardSettingsPage } />
                <Route path={ Routes.CREATE_EVENT } component={ EventForm } />
              </Switch>
            </Container>
          </>
        )} />
      </>
    </Provider>
  );
}

export default App;
