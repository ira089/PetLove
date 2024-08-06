// import { indicatorSeparatorCSS } from "react-select/dist/declarations/src/components/indicators";

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Manrope',
      borderColor: '#ef9a9a',
      background: '#fff',
      borderRadius: '30px',
      padding: '12px',

    //   borderColor: state.isFocused ? '#000' : '#ccc', // Рамка
    //   boxShadow: state.isFocused ? '0 0 0 1px #000' : 'none',
      '&:hover': {
        borderColor: '#000' // Рамка при ховере
      }
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: 'Manrope'
    }),
    input: (provided) => ({
      ...provided,
      fontFamily: 'Manrope'
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    })
  };
  
  export default customStyles;