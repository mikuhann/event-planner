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

const EventListItem = ({ event }) => {
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
          <EventListAttendee attendees={attendees} />
        </List>
      </Segment>
      <Segment clearing>
        {description}
        <Button as='a' color='teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  );
};

export default EventListItem;
