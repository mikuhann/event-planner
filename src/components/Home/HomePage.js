import React from 'react';
import { Segment, Container, Header, Image, Icon, Button } from 'semantic-ui-react';

import { Routes } from '../../constants/Routes';

const HomePage = ({ history }) => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.svg'
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          Event Planner
        </Header>
        <Button onClick={() => history.push(Routes.EVENTS)} size='huge' inverted>
          Get Started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
