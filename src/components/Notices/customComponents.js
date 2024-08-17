import React from 'react';
import { components} from 'react-select';
import Icon from '../Icon/Icon';

// const CustomClearIcon = () => <Icon width={18} height={18} name={'icon-cross'} />;
// export const ClearIndicator = (
//     props
//   ) => {
//     const {
//       children =  <Icon width={18} height={18} name={'icon-cross'} />,
//       // getStyles,
//       // innerProps: { ref, ...restInnerProps },
//     } = props;
//     return (
//       <div
//       // {...restInnerProps}
//       // ref={ref}
//       // style={getStyles('clearIndicator', props)}
//     >
//       <div style={{ padding: '0px 5px' }}>{children}</div>
//     </div>
//     );
//   };

//   export const ClearIndicatorStyles = (
//     base,
//     state
//   ) => ({
//     ...base,
//     cursor: 'pointer',
//     fillColor: state.isFocused ? 'blue' : 'black',
//   });

// export const DropdownIndicator = props =>
//   components.DropdownIndicator && (
//     <components.DropdownIndicator {...props}>
//       <div onClick={props.handleChangeLocation}>
//         <Icon width={18} height={18} name={'icon-loofah'} />
//       </div>
//     </components.DropdownIndicator>
//   );

export const DropdownIndicator = (
  props
) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon width={18} height={18} name={'icon-loofah'} />
    </components.DropdownIndicator>
  );
};

// export const ClearIndicator = props =>
//   components.ClearIndicator && (
//     <components.ClearIndicator {...props}>
//       <div onClick={props.clearValue}>
//         <Icon width={18} height={18} name={'icon-cross'} />
//       </div>
//     </components.ClearIndicator>
//   );

  export const ClearIndicator = (
    props
  ) => {
    return (
      <components.ClearIndicator {...props}>
       <Icon width={18} height={18} name={'icon-cross'} />
      </components.ClearIndicator>
    );
  };
  