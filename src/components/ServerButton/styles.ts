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
  }

  &::after {
  }
`;
