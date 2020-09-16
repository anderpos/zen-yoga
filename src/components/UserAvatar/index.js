import React from 'react';
import { AvatarBall } from './UserAvatar';

const UserAvatar = ({ name, imgSrc }) => {
  const initials = name.match(/\b(\w)/g).join('');
  const content = imgSrc ? <img alt={name} src={imgSrc}/> : <span>{initials}</span>;

  return (
    <AvatarBall>
      {content}
    </AvatarBall>
  );
}

export default UserAvatar;