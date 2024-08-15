import React from 'react';
import { components } from 'react-select';
import Icon from '../Icon/Icon';

export const DropdownIndicator = props =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <div onClick={props.handleChangeLocation}>
        <Icon width={18} height={18} name={'icon-loofah'} />
      </div>
    </components.DropdownIndicator>
  );

export const ClearIndicator = props =>
  components.ClearIndicator && (
    <components.ClearIndicator {...props}>
      <div onClick={props.clearValue}>
        <Icon width={18} height={18} name={'icon-cross'} />
      </div>
    </components.ClearIndicator>
  );
