import React from 'react';
import { Menu, Container, MenuItem, Button } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <MenuItem header>
          <img src="assets/logo.svg" alt="logo" />
          Event Planner
        </MenuItem>
        <MenuItem name='Events' />
        <MenuItem>
          <Button floated='right' positive inverted content='Create Event' />
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
