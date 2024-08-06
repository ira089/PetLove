import React from 'react';
import { components} from 'react-select';
import Icon from '../Icon/Icon'; 

export const DropdownIndicator = (props) => (
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <Icon width={18} height={18} name={'icon-loofah'} /> 
    </components.DropdownIndicator>
  )
);

export const ClearIndicator = (props) => (
  components.ClearIndicator && (
    <components.ClearIndicator {...props}>
      <div onClick={props.clearValue}>
        <Icon width={18} height={18} name={'icon-cross'} /> 
      </div>
    </components.ClearIndicator>
  )
);
// export const ClearIndicator = (props) => (
//     <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onMouseDown={(e) => {
//       e.stopPropagation();
//       props.clearValue();
//     }}>
//       <Icon width={18} height={18} name={'icon-cross'} />
//     </div>
//   );
// export const ClearIndicator = (props) => (
    
//     <div >
      
//       <components.Control {...props} />
//     </div>
//   );


