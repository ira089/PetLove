
// const NoticesFilters = () => {
  
//   const [location, setLocation] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [selectedOption, setSelectedOption] = useState({});

//   const dispatch = useDispatch();

//   const handleChangeLocation = value => {
//     dispatch(addLocation(value.value));
//     setSelectedOption(value);
//   };

//   const clearValue = () => {
//     dispatch(addLocation(''));
//     setInputValue('')
//   };

//   const handleInputChange = value => {
//     setInputValue(value);
//   };

//   const customFilter = (option, inputValue) => {
//     return option.label.toLowerCase().includes(inputValue.toLowerCase());
//   };

//   return (
//         <Select
//        placeholder='Location'
//           options={location}
//         closeMenuOnSelect={false}
//         components={{ DropdownIndicator: props => (<DropdownIndicator {...props}/>),
//         ClearIndicator: props => (<ClearIndicator {...props} clearValue={clearValue}/>)
//       }}
//           onChange={handleChangeLocation}
//           onInputChange={handleInputChange}
//           inputValue={inputValue}
//           value={selectedOption}
//           styles={customStyles}
//           isClearable
//           filterOption={customFilter}
//         />
//   );
// };

// export default NoticesFilters;
