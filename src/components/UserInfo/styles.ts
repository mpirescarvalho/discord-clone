import styled from 'styled-components';
import { MdMic, MdHeadset, MdSettings } from 'react-icons/md';

export const Container = styled.div`
  grid-area: UI;
  background-color: var(--quaternary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;

  > div {
    display: flex;
    align-items: center;
  }

  svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: var(--gray);
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin-left: 8px;

  strong {
    color: var(--white);
  }

  span {
    color: var(--gray);
  }
`;

export const MicIcon = styled(MdMic)`
  color: var(--white);
  width: 20px;
  height: 20px;
  opacity: 0.7;
`;

export const HeadphoneIcon = styled(MdHeadset)`
  color: var(--white);
  width: 20px;
  height: 20px;
  opacity: 0.7;
`;

export const SettingsIcon = styled(MdSettings)`
  color: var(--white);
  width: 20px;
  height: 20px;
  opacity: 0.7;
`;
