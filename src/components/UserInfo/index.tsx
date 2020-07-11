import React from 'react';

import {
  Container,
  Avatar,
  UserData,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <div>
        <Avatar />
        <UserData>
          <strong>Marcelo Carv...</strong>
          <span>#5596</span>
        </UserData>
      </div>
      <div>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default UserInfo;
