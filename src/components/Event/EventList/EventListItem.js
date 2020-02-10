import React from 'react';
import {
  Segment,
  SegmentGroup,
  Item,
  ItemGroup,
  ItemImage,
  ItemContent,
  ItemHeader,
  ItemDescription,
  Icon,
  List,
  Button,
} from 'semantic-ui-react';

import EventListAttendee from './EventListAttendee';

const EventListItem = ({ event, selectEvent, deleteEvent }) => {
  const { title, date, description, venue, hostedBy, hostPhotoURL, attendees } = event;
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <ItemImage size='tiny' circular src={hostPhotoURL} />
            <ItemContent>
              <ItemHeader as='a'>{title}</ItemHeader>
              <ItemDescription>
                Hosted by <a href="#">{hostedBy}</a>
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' />{date} |
          <Icon name='marker' />{venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendees && attendees.map((attendee) => <EventListAttendee key={attendee.id} attendee={attendee} /> )}
        </List>
      </Segment>
      <Segment clearing>
        {description}
        <Button
          onClick={() => selectEvent(event)}
          as='a'
          color='teal'
          floated='right'
          content='View'
        />
        <Button
          onClick={() => deleteEvent(event.id)}
          as='a'
          color='red'
          floated='right'
          content='Delete'
        />
      </Segment>
    </SegmentGroup>
  );
};

export default EventListItem;
