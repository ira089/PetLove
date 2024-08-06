// import { indicatorSeparatorCSS } from "react-select/dist/declarations/src/components/indicators";

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Manrope',
    //   borderColor: 'transparent',
      background: '#fff',
      borderRadius: '30px',
    //   padding: '12px',
      height: '42px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
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
    placeholder: (provided) => ({
      ...provided,
      fontFamily: 'Manrope',
      fontSize: '14px',
      lineHeight: '129%',
      letterSpacing: '-0.03em',
      color: '#262626'
    }),
    input: (provided) => ({
      ...provided,
      fontFamily: 'Manrope',
      fontSize: '14px',
      lineHeight: '129%',
      letterSpacing: '-0.03em',
      color: '#262626'
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    })
  };
  
  export default customStyles;