import Icon from 'components/Icon/Icon';
import React from 'react';

const UserBar = ({background, fill}) => {
  return (
    <div>
      <Icon width={20} height={20} name={"icon-pipl"}  fillColor={fill} stroke={background}/>  
    </div>
  )
}

export default UserBar