import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

export const Container = styled.div`
  grid-area: CL;
  padding: 27px 0;
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 16px;
  margin-bottom: 3px;
  span {
    text-transform: uppercase;
    color: var(--white);
    opacity: 0.5;
    font-size: 12px;
  }
`;

export const AddButton = styled(MdAdd)`
  width: 21px;
  height: 21px;
  color: var(--symbol);
  cursor: pointer;
`;
