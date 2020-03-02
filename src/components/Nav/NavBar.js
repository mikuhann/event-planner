import React, { useState } from 'react';
import { Menu, Container, MenuItem, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';

import SignOutMenu from './Menus/SignOutMenu';
import { Routes } from '../../constants/Routes';
import SignInMenu from './Menus/SignInMenu';

const NavBar = ({ history }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignIn = () => setAuthenticated(true);
  const handleSignOut = () => {
    setAuthenticated(false);

    history.push(Routes.HOME);
  };

  return (
    <Menu inverted fixed='top'>
      <Container>
        <MenuItem as={ NavLink } exact to={ Routes.HOME } header>
          <img src="/assets/logo.svg" alt="logo" />
          Event Planner
        </MenuItem>
        <MenuItem as={ NavLink } exact to={ Routes.EVENTS }  name='Events' />
        <MenuItem as={ NavLink } exact to={ Routes.PROFILES } name='Profiles' />
        <MenuItem>
          <Button
            as={ Link }
            to={ Routes.CREATE_EVENT }
            floated='right'
            positive
            inverted
            content='Create Event'
          />
        </MenuItem>
        { authenticated ? <SignInMenu signOut={handleSignOut} /> : <SignOutMenu signIn={handleSignIn} /> }
      </Container>
    </Menu>
  );
};

export default withRouter(NavBar);
