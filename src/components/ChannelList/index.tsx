import React from 'react';

import { Container, Category, AddButton } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddButton />
      </Category>
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="bot" />
      <ChannelButton channelName="vava" />
      <ChannelButton channelName="lou" />
      <ChannelButton channelName="Os Deuses" />
    </Container>
  );
};

export default ChannelList;
