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

const EventListItem = () => {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <ItemImage size='tiny' circular src='https://randomuser.me/api/portraits/men/36.jpg' />
            <ItemContent>
              <ItemHeader as='a'>EventTitle</ItemHeader>
              <ItemDescription>
                Hosted by <a href="#">hosted by</a>
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' />date
          <Icon name='marker' />time
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          <EventListAttendee />
          <EventListAttendee />
          <EventListAttendee />
        </List>
      </Segment>
      <Segment clearing>
        Description
        <Button as='a' color='teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  );
};

export default EventListItem;
