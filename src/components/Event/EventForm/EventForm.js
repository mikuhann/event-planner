import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

import FormInput from './FormInput';

const EventForm = ({closeForm}) => {
  return (
    <Segment>
      <Form>
        <FormInput label='Event Title' placeholder='Event Title' />
        <FormInput label='Event Date' type='date' placeholder='Event Date' />
        <FormInput label='City' placeholder='City event is taking place' />
        <FormInput label='Venue' placeholder='Enter the Venue of the event'/>
        <FormInput label='Hosted by' placeholder='Enter the name of person hosting' />
        <Button positive type='submit' content='Submit' />
        <Button type='button' content='Cancel' onClick={closeForm} />
      </Form>
    </Segment>
  );
};

export default EventForm;
