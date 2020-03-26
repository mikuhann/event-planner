import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import uuid from 'uuid';

import EventList from '../EventList/';
import EventForm from '../EventForm';

import { selectEvents } from '../../../constants/selectors';
import { createEvent, updateEvent, deleteEvent } from '../../../redux/actions/event';

const EventDashboard = () => {
  const events = useSelector(selectEvents);
  const dispatch = useDispatch();

  const [formState, setFormState] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormState(true);
  };

  const handleFormCancel = () => {
    setFormState(false);
  };

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setFormState(true);
  };

  const handleCreateEvent = (newEvent) => {
    newEvent.id = uuid.v4();

    newEvent.hostPhotoURL = '/assets/user.png';

    dispatch(createEvent(newEvent));

    setFormState(false);
  };

  const handleUpdateEvent = (updatedEvent) => {
    dispatch(updateEvent(updatedEvent));

    setFormState(false);

    setSelectedEvent(null);
  };

  const handleDeleteEvent = (eventId) => {
    dispatch(deleteEvent(eventId));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          selectEvent={handleSelectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button onClick={handleCreateFormOpen} positive content='Create Event'/>
        {formState && <EventForm
          updateEvent={handleUpdateEvent}
          selectedEvent={selectedEvent}
          handleCreateEvent={handleCreateEvent}
          closeForm={handleFormCancel}
        />}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
