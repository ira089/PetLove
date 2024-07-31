import React from 'react';
// import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
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
const onSearch = (value, _e) => console.log( value);

const SearchField = () => {
  return (
    <Search className={styles.inputSearch}
    placeholder="Search"
    allowClear
    onSearch={onSearch}
    // style={{
    //   width: 335,
    // }}
  />
  )
}

export default SearchField