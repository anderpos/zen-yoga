import React from 'react';
import { HeaderBackground } from './Header';

import SearchBar from '../SearchBar';
import LeftPlaceholder from '../LeftPlaceholder';
import NotificationIcon from '../NotificationIcon';
import HeaderUser from '../HeaderUser';

const Header = () => {
  return (
    <header>
      <HeaderBackground>
        <LeftPlaceholder/>
        <SearchBar/>

        <div className="right">
          <div className="notificationIcon">
            <NotificationIcon/>
          </div>
          <HeaderUser/>
        </div>
        
      </HeaderBackground>
    </header>
  );
}

export default Header;