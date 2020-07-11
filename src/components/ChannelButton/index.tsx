import React from 'react';

import { Container, HashtagIcon, AddPersonIcon, ConfigIcon } from './styles';

export interface Props {
  channelName: String;
}

const ChannelButton: React.FC<Props> = ({ channelName }) => {
  return (
    <Container>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <AddPersonIcon />
        <ConfigIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
