import React from 'react';
import {MenuItem, Button } from 'semantic-ui-react';

const SignOutMenu = ({ signIn }) => {
  return (
    <MenuItem position='right'>
      <Button
        onClick={ signIn }
        basic
        inverted
        content='Login'
      />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: '0.5em' }}
      />
    </MenuItem>
  );
};

export default SignOutMenu;
