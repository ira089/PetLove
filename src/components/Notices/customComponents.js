import React from 'react';
import { components } from 'react-select';
import Icon from '../Icon/Icon'; 

const DropdownIndicator = (props) => (
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <Icon name="search" /> {/* Иконка лупы */}
    </components.DropdownIndicator>
  )
);

const ClearIndicator = (props) => (
  components.ClearIndicator && (
    <components.ClearIndicator {...props}>
      <div onClick={props.clearValue}>
        <Icon name="clear" /> {/* Иконка крестика */}
      </div>
    </components.ClearIndicator>
  )
);

export { DropdownIndicator, ClearIndicator };