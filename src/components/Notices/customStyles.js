// import { indicatorSeparatorCSS } from "react-select/dist/declarations/src/components/indicators";

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Manrope',
      borderColor: '#ef9a9a',
      background: '#fff',
      borderRadius: '30px',
      padding: '12px',
      height: '42px',

    //   borderColor: state.isFocused ? '#000' : '#ccc', // Рамка
    //   boxShadow: state.isFocused ? '0 0 0 1px #000' : 'none',
      '&:hover': {
        borderColor: '#f6b83d' // Рамка при ховере
      }
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