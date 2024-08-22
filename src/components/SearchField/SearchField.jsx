import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
// import { Input } from 'antd';
import { addQuery } from '../../redux/search/searchSlice';
// import customStyles from './customStyles';

import styles from './searchField.module.css';
import Icon from 'components/Icon/Icon';

// const { Search } = Input;

const SearchField = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  console.log(search);

  const handleChange = ({ target }) => {
    setSearch(target.value.trim());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addQuery(search));

    // setSearch('')
  };

  const handleClear = () => {
    setSearch('');
    dispatch(addQuery(''))
  }

  // const onSearch = (value, _e) => {
  //   dispatch(addQuery(value));
  // };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchFormInput}
        onChange={handleChange}
        type="text"
        name="serch"
        value={search}
        placeholder="Search"
      />
      {search && (
        <button type="button" className={styles.searchFormButton} onClick={handleClear}>
          <span className={styles.searchFormButtonLabel}></span>

          <Icon width={18} height={18} name="icon-cross" />
        </button>
      )}

      <button type="submit" className={styles.searchFormButton}>
        <span className={styles.searchFormButtonLabel}></span>
        <Icon width={18} height={18} name={'icon-loofah'} />
      </button>
    </form>
    // <Search
    //   className={styles.inputSearch}
    //   placeholder="Search"
    //   allowClear
    //   onSearch={onSearch}
    //   style={customStyles}
    // />
  );
};

export default SearchField;
