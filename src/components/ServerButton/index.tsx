import React from 'react';
import Logo from '../../assets/home.png';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => (
  <Button
    className={selected ? 'active' : ''}
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
  >
    {isHome && <img src={Logo} alt="Discord Logo" />}
  </Button>
);

export default ServerButton;
