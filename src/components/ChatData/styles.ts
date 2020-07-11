import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CD;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);

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

export const Chat = styled.div`
  padding: 22px 0;
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
