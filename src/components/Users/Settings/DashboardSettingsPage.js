import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavbarSettingsPage from './NavbarSettingsPage';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';

import { Routes } from '../../../constants/Routes';

const DashboardSettingsPage = () => {
  return (
    <Grid>
      <GridColumn width={12}>
        <Switch>
          <Redirect exact from={ Routes.SETTINGS } to={ Routes.SETTINGS_BASIC } />
          <Route exact path={ Routes.SETTINGS_BASIC } component={ BasicPage } />
          <Route exact path={ Routes.SETTINGS_ABOUT } component={ AboutPage } />
          <Route exact path={ Routes.SETTINGS_PHOTOS } component={ PhotosPage } />
          <Route exact path={ Routes.SETTINGS_ACCOUNT } component={ AccountPage } />
        </Switch>
      </GridColumn>
      <GridColumn width={4}>
        <NavbarSettingsPage />
      </GridColumn>
    </Grid>
  );
};

export default DashboardSettingsPage;
