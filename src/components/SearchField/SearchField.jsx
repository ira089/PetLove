import React, { useState, useEffect } from 'react';
// import { AudioOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import { newsThunk } from '../../redux/new/opertionsNew';
import { addQuery } from '../../redux/new/searchSlice';
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
    console.log(value);
    dispatch(addQuery(value))
  };
  
  

  // useEffect(() => {
  //   if(searh === '' ){
  //     return
  //   }
  //   dispatch(newsThunk({ searh, page }));
  // }, [dispatch, page, searh]);

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
