import React from 'react';
import { ListItem, Image } from 'semantic-ui-react';

const EventListAttendee = ({ attendee: { id, photoURL } }) => {
  return (
    <ListItem key={id}>
      <Image as='a' size='mini' circular src={photoURL} />
    </ListItem>
  );
};

export default EventListAttendee;
