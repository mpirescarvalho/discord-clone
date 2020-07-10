import styled from 'styled-components';

import { Props } from './index';

export const Button = styled.button<Props>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 8px;
  flex-shrink: 0;
  transition: all 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: pointer;

  background-color: var(--primary);

  &.active,
  &:hover {
    background-color: var(--discord);
    border-radius: 35%;
  }

  > img {
    width: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;
    border-radius: 50%;

    position: absolute;
    left: -17px;

    background-color: var(--white);

    content: '';

    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
  }

  &::after {
    width: auto;
    height: 16px;
    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    background-color: var(--notification);

    content: '${(props) => props.mentions && props.mentions}';

    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }
`;
