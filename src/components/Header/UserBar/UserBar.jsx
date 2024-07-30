import Icon from 'components/Icon/Icon';
import React from 'react';

const UserBar = ({background, fill}) => {
  return (
    <div>
      <Icon width={40} height={40} name={"icon-pipl"}  fillColor={fill} stroke={background}/>  
    </div>
  )
}

export default UserBar