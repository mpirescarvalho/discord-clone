import styled from 'styled-components';
import { FiHash } from 'react-icons/fi';

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 17px;

  background-color: var(--primary);
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.5);

  z-index: 2;
`;

export const HashtagIcon = styled(FiHash)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`;

export const Title = styled.div`
  font-weight: bold;
  margin-left: 9px;
  color: var(--white);
`;

export const Divider = styled.div`
  height: 24px;
  width: 1px;

  background-color: var(--white);
  opacity: 0.2;

  margin: 0 13px;
`;

export const Description = styled.div`
  font-size: 15px;
  color: var(--white);
  opacity: 0.3;
`;
