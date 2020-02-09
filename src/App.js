import React from 'react';
import { Container } from 'semantic-ui-react';

import EventDashboard from './components/Event/EventDashboard/EventDashboard';
import NavBar from './components/Nav/NavBar';

import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
