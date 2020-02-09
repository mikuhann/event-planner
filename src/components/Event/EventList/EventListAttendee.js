import React from 'react';
import { ListItem, Image } from 'semantic-ui-react';

const EventListAttendee = () => {
  return (
    <ListItem>
      <Image as='a' size='mini' circular src='https://randomuser.me/api/portraits/women/35.jpg' />
    </ListItem>
  );
};

export default EventListAttendee;
