import React from 'react';
import { Menu, MenuItem, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import { Routes } from '../../../constants/Routes';

const NavbarSettingsPage = () => {
  return (
    <>
      <Menu vertical>
        <Header icon='user' attached inverted color='grey' content='Profile' />
        <MenuItem as={ NavLink } to={ Routes.SETTINGS_BASIC }>Basics</MenuItem>
        <MenuItem as={ NavLink } to={ Routes.SETTINGS_ABOUT }>About me</MenuItem>
        <MenuItem as={ NavLink } to={ Routes.SETTINGS_PHOTOS }>My Photos</MenuItem>
      </Menu>
      <Menu vertical>
        <Header
          icon='settings'
          attached
          inverted
          color='grey'
          content='Account'
        />
        <MenuItem as={ NavLink } to={ Routes.SETTINGS_ACCOUNT}>My account</MenuItem>
      </Menu>
    </>
  );
};

export default NavbarSettingsPage;
