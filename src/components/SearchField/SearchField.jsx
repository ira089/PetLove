import React from 'react';
// import { AudioOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import { addQuery } from '../../redux/search/searchSlice';
import styles from './searchField.module.css';

const { Search } = Input;
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1677ff',
//     }}
//   />
// );

const SearchField = () => {
  
  const dispatch = useDispatch();
 

  const onSearch = (value, _e) => {
    dispatch(addQuery(value))
  };

  return (
    <Search
      className={styles.inputSearch}
      placeholder="Search"
      allowClear
      onSearch={onSearch}
      // style={{
      //   width: 335,
      // }}
    />
  );
};

export default SearchField;
