import React from 'react';

import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import { addQuery } from '../../redux/search/searchSlice';
import customStyles from './customStyles';

import styles from './searchField.module.css';

const { Search } = Input;

const SearchField = () => {
  const dispatch = useDispatch();

  const onSearch = (value, _e) => {
    dispatch(addQuery(value));
  };

  return (
    <Search
      className={styles.inputSearch}
      placeholder="Search"
      allowClear
      onSearch={onSearch}
      style={customStyles}
    />
  );
};

export default SearchField;
