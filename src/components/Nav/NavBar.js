import React from 'react';
import { Menu, Container, MenuItem, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

import { Routes } from '../../constants/Routes';

const NavBar = () => {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <MenuItem as={ NavLink } exact to={ Routes.HOME } header>
          <img src="assets/logo.svg" alt="logo" />
          Event Planner
        </MenuItem>
        <MenuItem as={ NavLink } exact to={ Routes.EVENTS }  name='Events' />
        <MenuItem as={ NavLink } exact to={ Routes.PROFILES } name='Profiles' />
        <MenuItem>
          <Button
            as={ Link }
            exact to={ Routes.CREATE_EVENT }
            floated='right'
            positive
            inverted
            content='Create Event'
          />
        </MenuItem>
        <MenuItem position='right'>
          <Button basic inverted content='Login' />
          <Button basic inverted content='Sign out' style={{ marginLeft: '0.5em'}} />
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default NavBar;
