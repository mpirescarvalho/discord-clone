import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 11px 0 16px;

  background-color: var(--secondary);
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.5);

  z-index: 2;

  strong {
    font-size: 16px;
    color: var(--white);
  }
`;

export const ExpandIcon = styled(MdExpandMore)`
  width: 28px;
  height: 28px;
  color: var(--white);
  cursor: pointer;
`;
