import styled from 'styled-components';
import { FiAtSign } from 'react-icons/fi';

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Chat = styled.div`
  height: calc(100vh - 46px - 68px);
  padding: 22px 0;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: center;

  margin-left: 16px;

  & + div {
    margin-top: 20px;
  }

  > div > div > span {
    margin: 0 8px;
    background-color: var(--discord);
    border-radius: 4px;
    padding: 3px 4px;
    font-weight: bold;
    font-size: 12px;
    color: var(--white);
  }

  > div > div {
    margin-bottom: 3px;
  }

  strong {
    font-weight: 500;
    font-size: 16px;
    color: var(--white);
  }

  time {
    font-size: 13px;
    color: var(--white);
    opacity: 0.42;
  }

  > div > p {
    font-size: 16px;
    color: var(--white);

    span {
      color: var(--link);
    }
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 16px;
  background-color: var(--secondary);
  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const ContainerInput = styled.div`
  width: calc(100% - 32px);
  margin: 0 16px 23px 16px;
  background-color: var(--chat-input);
  height: 44px;
  display: flex;
  align-items: center;
  border-radius: 6px;
`;

export const Input = styled.input`
  color: var(--white);
  background: none;
  flex-grow: 1;
  height: 100%;
  padding: 0 10px 0 0;
`;

export const InputIcon = styled(FiAtSign)`
  width: 20px;
  height: 20px;
  color: var(--gray);
  margin: 0 21px 0 16px;
`;
