import React from 'react';
import { components } from 'react-select';
import Icon from '../Icon/Icon'; 

const DropdownIndicator = (props) => (
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <Icon width={18} height={18} name={'icon-search'} /> {/* Иконка лупы */}
    </components.DropdownIndicator>
  )
);

const ClearIndicator = (props) => (
  components.ClearIndicator && (
    <components.ClearIndicator {...props}>
      <div onClick={props.clearValue}>
        <Icon width={18} height={18} name={'icon-menu-01'} /> {/* Иконка крестика */}
      </div>
    </components.ClearIndicator>
  )
);

export { DropdownIndicator, ClearIndicator };