import React from 'react';
import { components } from 'react-select';
import Icon from '../Icon/Icon';

export const ClearIndicator = props => {
 
  const {
    children = <Icon width={18} height={18} name="icon-cross" />,
    handlerClearValue,
    innerProps: { ref, ...restInnerProps },
  } = props;

  return (
    <div
      {...restInnerProps}
      ref={ref}
      onClick={() => {
        handlerClearValue();
      }}
    >
      <div style={{ padding: '0px 0px' }}>{children}</div>
    </div>
  );
};

export const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon width={18} height={18} name={'icon-loofah'} />
    </components.DropdownIndicator>
  );
};

export const CustomOption = ({ children, ...props }) => {
  const { inputValue } = props.selectProps;
  const startIndex = children.toLowerCase().indexOf(inputValue.toLowerCase());

  if (startIndex === -1) {
    return <components.Option {...props}>{children}</components.Option>;
  }

  const endIndex = startIndex + inputValue.length;
  const beforeMatch = children.slice(0, startIndex);
  const match = children.slice(startIndex, endIndex);
  const afterMatch = children.slice(endIndex);

  return (
    <components.Option {...props}>
      {beforeMatch}
      <span style={{ color: '#262626' }}>{match}</span>
      {afterMatch}
    </components.Option>
  );
};
