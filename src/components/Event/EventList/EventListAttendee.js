import React from 'react';
import { ListItem, Image } from 'semantic-ui-react';

const EventListAttendee = ({ attendees }) => {
  return (
    attendees.map(({id, photoURL}) => (
      <ListItem key={id}>
        <Image as='a' size='mini' circular src={photoURL} />
      </ListItem>
    ))
  );
};

export default EventListAttendee;
