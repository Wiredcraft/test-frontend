import React from 'react';
import HomeIcon from '../../icons/homeIcon';
import RingIcon from '../../icons/ringIcon';
import AvatarIcon from '../../icons/avatarIcon';

export default function Panel(): React.ReactElement{
  return (
    <div className="icons">
      <span className="icon home"><HomeIcon /></span>
      <span className="icon ring"><RingIcon /></span>
      <span className="icon avatar"><AvatarIcon /></span>
    </div>
  );
}
 