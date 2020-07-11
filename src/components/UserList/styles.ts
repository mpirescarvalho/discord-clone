import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;
  background-color: var(--secondary);
  padding: 0 16px;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.div`
  text-transform: uppercase;
  color: var(--gray);
  font-size: 12px;
  margin: 23px 0 11px 0;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: var(--primary);
  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  span {
    margin-left: 8px;
    background-color: var(--discord);
    border-radius: 4px;
    padding: 3px 4px;
    font-weight: bold;
    font-size: 12px;
    color: var(--white);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
