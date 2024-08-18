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
  addGender,
} from '../../redux/search/searchSlice';
import { optionObj, optionObjLoc } from '../../helpers/functions';
import SearchField from 'components/SearchField/SearchField';
import customStyles from './customStyles';
import {
  DropdownIndicator,
  ClearIndicator,
  CustomOption
} from './customComponents';
import styles from './noticesFilters.module.css';

const NoticesFilters = () => {
  const [category, setCategory] = useState([]);
  const [byType, setByType] = useState([]);
  const [bySex, setBysex] = useState([]);
  const [location, setLocation] = useState([]);
  const [inputValue, setInputValue] = useState('');

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
        const dataArr = await params.fetchSex();
        const dataObj = optionObj(dataArr);
        setBysex(dataObj);
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

  const handleChangeSex = value => {
    dispatch(addGender(value.value));
  };

  const handleChangeType = value => {
    dispatch(addType(value.value));
  };

  const handleChangeLocation = value => {
    if (!value) {
      dispatch(addLocation(''));
    } else {
      dispatch(addLocation(value.value));
    }
  };

  const handleClearValue = () => {
    dispatch(addLocation(''));
    setInputValue('');
  };
  
  const handleInputChange = value => {
    setInputValue(value);
  };

  const customFilter = (option, inputValue) => {
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  };

  const onRadio = evt => {
    const byValue = evt.target.value;
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
          options={bySex}
          onChange={handleChangeSex}
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
          placeholder="Location"
          options={location}
          closeMenuOnSelect={false}
          components={{
            DropdownIndicator: props => <DropdownIndicator {...props} />,
            ClearIndicator: props => (
              <ClearIndicator {...props} handlerClearValue={handleClearValue} />
            ),
            Option: CustomOption,
          }}
          onChange={handleChangeLocation}
          onInputChange={handleInputChange}
          inputValue={inputValue}
          styles={customStyles}
          isClearable
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
