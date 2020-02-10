import React, { useState } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import uuid from 'uuid';

import EventList from '../EventList/';
import EventForm from '../EventForm';

const EventDashboard = () => {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Trip to Tower of London',
      date: '2018-03-27',
      category: 'culture',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: `Tower of London, St Katharine's & Wapping, London`,
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        },
      ]
    },
    {
      id: '2',
      title: 'Trip to Punch and Judy Pub',
      date: '2018-03-28',
      category: 'drinks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      attendees: [
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        },
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        },
      ],
    }
  ]);

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
    setEvents([...events, newEvent]);
    setFormState(false);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEvents(events.map((event) => event.id === updatedEvent.id ? updatedEvent : event));
    setFormState(false);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId))
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
