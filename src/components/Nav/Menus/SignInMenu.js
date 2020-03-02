import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, Image, Dropdown, DropdownMenu, DropdownItem } from 'semantic-ui-react';

import { Routes } from '../../../constants/Routes';

const SignInMenu = ({ signOut }) => {
  return (
    <MenuItem position='right'>
      <Image avatar spaced='right' src='/assets/user.png'/>
      <Dropdown pointing='top left' text='Username'>
        <DropdownMenu>
          <DropdownItem text='Create Event' icon='plus' />
          <DropdownItem text='My Events' icon='calendar' />
          <DropdownItem text='My Network' icon='users' />
          <DropdownItem text='My Profile' icon='user'/>
          <DropdownItem
            as={Link}
            to={Routes.SETTINGS}
            text='Settings'
            icon='settings'
          />
          <DropdownItem
            onClick={ signOut }
            text='Sign Out'
            icon='power' />
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  );
};

export default SignInMenu;
