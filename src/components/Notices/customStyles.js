
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    fontFamily: 'Manrope',
    background: '#fff',
    borderRadius: '30px',
      padding: '0 12px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    lineHeight: '129%',
    letterSpacing: '-0.03em',
    justifyContent: 'space-between',
    borderColor: state.isFocused ? '#f6b83d' : 'transparent',
    boxShadow: state.isFocused ? '#f6b83d' : '0 0 0 1px transparent',

    //   '&:focus': {
    //     borderColor: '#f6b83d',
    //     boxShadow: '0 0 0 1px #f6b83d'
    //   },
    //   '&:hover': {
    //     borderColor: '#f6b83d',
    //     boxShadow: '0 0 0 1px #f6b83d'
    //   },
    //   '&:active': {
    //     borderColor: '#f6b83d',
    //      boxShadow: '0 0 0 1px #f6b83d'
    //   }
  }),
  placeholder: provided => ({
    ...provided,
    color: '#262626',
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
    color: 'rgba(38, 38, 38, 0.6)',
    borderRadius: '15px',
    background: '#fff',
    boxShadow: 'transparent',
  }),
  valueContainer: provided => ({
    ...provided,
   padding:  '0',
   cursor: 'text',
  }),
};

export default customStyles;
