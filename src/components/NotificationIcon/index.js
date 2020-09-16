import React from 'react';
import { NotificationBell } from './NotificationIcon';

const NotificationIcon = () => {
  return (
    <NotificationBell alt="Notification bell" src={`${process.env.PUBLIC_URL}/img/bell_notification.png`}/>
  );
}

export default NotificationIcon;