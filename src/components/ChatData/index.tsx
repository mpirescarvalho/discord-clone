import React from 'react';

import {
  Container,
  Chat,
  Message,
  Avatar,
  ContainerInput,
  Input,
  InputIcon,
} from './styles';

const ChatData: React.FC = () => {
  return (
    <Container>
      <Chat>
        {Array.from(Array(15).keys()).map((n) => (
          <Message key={n}>
            <Avatar />
            <div>
              <div>
                <strong>Marcelo Carvalho</strong> <time>11/07/2020</time>
              </div>
              <p>Essa é uma mensagem.</p>
            </div>
          </Message>
        ))}

        <Message>
          <Avatar className="bot" />
          <div>
            <div>
              <strong>Outro Alguém</strong>
              {<span>BOT</span>}
              <time>11/07/2020</time>
            </div>
            <p>
              Ei <span className="mention">@Marcelo Carvalho</span>, me carrega
              no lolzinho
            </p>
          </div>
        </Message>
      </Chat>
      <ContainerInput>
        <InputIcon />
        <Input placeholder="Conversar em #chat-live" />
      </ContainerInput>
    </Container>
  );
};

export default ChatData;
