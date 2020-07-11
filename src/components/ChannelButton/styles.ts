import styled from 'styled-components';
import { FiHash } from 'react-icons/fi';
import { MdPersonAdd, MdSettings } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 3px 5px 8px;

  transition: all 0.2s;

  border-radius: 4px;
  margin: 0 10px;

  > div span {
    margin-left: 5px;
    color: var(--symbol);
  }

  > div {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`;

export const HashtagIcon = styled(FiHash)`
  width: 21px;
  height: 21px;
  color: var(--symbol);
`;

export const AddPersonIcon = styled(MdPersonAdd)`
  color: var(--symbol);
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const ConfigIcon = styled(MdSettings)`
  color: var(--symbol);
  margin-left: 2px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: var(--white);
  }
`;
