import React from 'react';

import { Container, Avatar, Role, User } from './styles';

export interface UserProps {
  isBot?: boolean;
  name: String;
}

const UserItem: React.FC<UserProps> = ({ isBot, name }) => (
  <User>
    <Avatar className={isBot ? 'bot' : ''} />
    <strong>{name}</strong> {isBot && <span>BOT</span>}
  </User>
);

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserItem name="Marcelo Carvalho" />
      <Role>Offline - 18</Role>
      <UserItem name="Dorime" isBot />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
      <UserItem name="Outro Alguém" />
    </Container>
  );
};

export default UserList;
