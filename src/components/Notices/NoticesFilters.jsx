import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import * as params from '../../api/filterApi';
import {
  addCategory,
  addType,
  addByPrice,
  addByPopularity,
  addLocation,
} from '../../redux/search/searchSlice';
import { optionObj, optionObjLoc } from '../../helpers/functions';
import SearchField from 'components/SearchField/SearchField';
import customStyles from './customStyles';
import { DropdownIndicator, ClearIndicator } from './customComponents';
import styles from './noticesFilters.module.css';

const NoticesFilters = () => {
  const [category, setCategory] = useState([]);
  const [byType, setByType] = useState([]);
  const [location, setLocation] = useState([]);
  const [inputValue, setInputValue] = useState('');
  console.log(typeof(inputValue))
  const isInputValue = Boolean(inputValue)
  console.log(isInputValue)

  // const [selectedOption, setSelectedOption] = useState(null);
  // console.log(selectedOption)
  // console.log(location)

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataArr = await params.fetchCategories();
        const dataObj = optionObj(dataArr);
        setCategory(dataObj);
      } catch (error) {
        return error.message;
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataArr = await params.fetchSpecies();
        const dataObj = optionObj(dataArr);
        setByType(dataObj);
      } catch (error) {
        return error.message;
      }
    };
    getData();
  }, []);

  const options = [
    { value: '', label: 'Show all' },
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'unknown', label: 'Unknown' },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const dataArr = await params.fetchCities();
        const dataObj = optionObjLoc(dataArr);
        setLocation(dataObj);
      } catch (error) {
        return error.message;
      }
    };
    getData();
  }, []);

  const handleChangeCategory = value => {
    dispatch(addCategory(value.value));
  };

  const handleChangeType = value => {
    dispatch(addType(value.value));
  };

  const handleChangeLocation = value => {
    dispatch(addLocation(value.value));
    // setSelectedOption(value);
  };

  const handleClear = () => {
    dispatch(addLocation(''));
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const customFilter = (option, inputValue) => {
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  };

  const onRadio = evt => {
    const byValue = evt.target.value;
    console.log(byValue);
    switch (byValue) {
      case 'popular':
        dispatch(addByPopularity(true));
        break;
      case 'unpopular':
        dispatch(addByPopularity(false));
        break;
      case 'cheap':
        dispatch(addByPrice(false));
        break;
      case 'expensive':
        dispatch(addByPrice(true));
        break;
      default:
        dispatch(addByPopularity(''));
    }
  };

  return (
    <section className={styles.wrapFilter}>
      <div className={styles.wrapInput}>
        <SearchField />
        <Select
          options={category}
          onChange={handleChangeCategory}
          placeholder={'Category'}
          styles={customStyles}
        />
        <Select
          options={options}
          styles={customStyles}
          placeholder={'By gender'}
        />
        <Select
          options={byType}
          onChange={handleChangeType}
          placeholder={'By type'}
          styles={customStyles}
        />
        <Select
          options={location}
          onChange={handleChangeLocation}
          onInputChange={handleInputChange}
          inputValue={inputValue}
          // value={selectedOption}
          styles={customStyles}
          components={{ DropdownIndicator,
            ClearIndicator
            // ClearIndicator: <ClearIndicator clearValue={handleClear} /> 
            // ClearIndicator: isInputValue ? (props) => <ClearIndicator {...props} clearValue={handleClear} /> : null 
            
           }}
           
          isClearable
          placeholder={'Location'}
          filterOption={customFilter}
        />
      </div>

      <form className={styles.wrapRadio} onClick={onRadio}>
        <label className={styles.label}>
          <input
            className={styles.radio}
            type="radio"
            name="sort"
            value="popular"
            hidden
          />
          <div className={styles.radio}>Popular</div>
        </label>

        <label className={styles.label}>
          <input
            className={styles.radio}
            type="radio"
            name="sort"
            value="unpopular"
            hidden
          />
          <div className={styles.radio}>Unpopular</div>
        </label>
        <label className={styles.label}>
          <input
            className={styles.radio}
            type="radio"
            name="sort"
            value="cheap"
            hidden
          />
          <div className={styles.radio}>Cheap</div>
        </label>
        <label className={styles.label}>
          <input
            className={styles.radio}
            type="radio"
            name="sort"
            value="expensive"
            hidden
          />
          <div className={styles.radio}>Expensive</div>
        </label>
      </form>
    </section>
  );
};

export default NoticesFilters;
