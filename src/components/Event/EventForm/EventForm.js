import React, { useState, useEffect } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

import FormInput from './FormInput';

const EventForm = ({closeForm, handleCreateEvent, updateEvent, selectedEvent}) => {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: '',
  });

  useEffect(() => {
    if (selectedEvent) {
      setEvent({ ...selectedEvent });
    } else {
      setEvent({
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: '',
      })
    }
  }, [selectedEvent]);

  const { title, date, city, venue, hostedBy } = event;

  const onChangeHandler = ({ target: { name, value } }) => setEvent({ ...event, [name]: value });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (selectedEvent === null) {
      handleCreateEvent(event);
    } else {
      updateEvent(event);
    }
  };

  return (
    <Segment>
      <Form onSubmit={onSubmitHandler}>
        <FormInput
          label='Event Title'
          name='title'
          value={title}
          onChange={onChangeHandler}
          placeholder='Event Title'
        />
        <FormInput
          label='Event Date'
          name='date'
          value={date}
          type='date'
          onChange={onChangeHandler}
          placeholder='Event Date'
        />
        <FormInput
          label='City'
          name='city'
          value={city}
          onChange={onChangeHandler}
          placeholder='City event is taking place'
        />
        <FormInput
          label='Venue'
          name='venue'
          value={venue}
          onChange={onChangeHandler}
          placeholder='Enter the Venue of the event'
        />
        <FormInput
          label='Hosted by'
          name='hostedBy'
          value={hostedBy}
          onChange={onChangeHandler}
          placeholder='Enter the name of person hosting'
        />
        <Button positive type='submit' content={`${selectedEvent ? 'Update' : 'Submit'}`} />
        <Button type='button' content='Cancel' onClick={closeForm} />
      </Form>
    </Segment>
  );
};

export default EventForm;
