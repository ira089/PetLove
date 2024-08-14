const customStyles = {
    container: (provided, state) => ({
      ...provided,
      fontFamily: 'Manrope',
      background: '#fff',
    //   borderRadius: '30px',
        // padding: '12px',
      width: '50%',
      height: '42px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      lineHeight: '129%',
      letterSpacing: '-0.03em',
      justifyContent: 'space-between',
     
      boxShadow: state.isFocused ? '#f6b83d' : '0 0 0 1px transparent',
  
    }),
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused ? '#f6b83d' : 'rgba(38, 38, 38, 0.15)',
        boxShadow: state.isFocused ? '#f6b83d' : '0 0 0 1px transparent',
        color: 'rgba(38, 38, 38, 0.5)',
        width: '220px',
        borderRadius: '30px',
        padding: '0 12px',
      }),
    placeholder: provided => ({
      ...provided,
      color: 'rgba(38, 38, 38, 0.5)',
    }),
    input: provided => ({
      ...provided,
      color: '#262626',
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
    }),
    menu: provided => ({
      ...provided,
      color: 'rgba(38, 38, 38, 0.5)',
      borderRadius: '15px',
      background: '#fff',
      boxShadow: 'transparent',
      borderColor: 'rgba(38, 38, 38, 0.15)',
    }),
    valueContainer: provided => ({
      ...provided,
     padding:  '0',
     cursor: 'text',
    }),
  };
  
  export default customStyles;
  