import React from 'react';

import { Container, HashtagIcon, Title, Divider, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>chat-livre</Title>
      <Divider />
      <Description>Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;
