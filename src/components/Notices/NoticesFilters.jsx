import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select'
import * as params from '../../api/filterApi';
import { addCategory, addType } from '../../redux/search/searchSlice';
import {optionObj} from '../../helpers/functions';
import SearchField from 'components/SearchField/SearchField';
import styles from './noticesFilters.module.css';

const NoticesFilters = () => {
  const [category, setCategory] = useState([]);
  const [byType, setByType] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataArr = await params.fetchCategories();
        const dataObj =  optionObj(dataArr)
        setCategory(dataObj);
      } catch (error) {
        return(error.message);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataArr = await params.fetchSpecies();
        const dataObj =  optionObj(dataArr)
        setByType(dataObj);
      } catch (error) {
        return(error.message);
      }
    };
    getData();
  }, []);
  
  const options = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'multiple', label: 'Multiple' },
    {value: 'unknown', label: 'Unknown' }
  ]
  
  const handleChangeCategory = (value) => {
    console.log(value.value)
    dispatch(addCategory(value.value))
  }

  const handleChangeType = (value) => {
    console.log(value.value)
    dispatch(addType(value.value))
  }

  return (
    <section className={styles.wrapFilter}>
      <div className={styles.wrapInput}>
      <SearchField/>
     <Select options={category}  onChange={handleChangeCategory} placeholder={'Category'}/>
      <Select options={options} placeholder={'By gender'} />
      <Select options={byType} onChange={handleChangeType} placeholder={'By type'}/>
      <Select  placeholder={'Location'}/>
      
      </div>
    
    <form className={styles.wrapRadio}>
    <label className={styles.label}>
            <input className={styles.radio} type='radio' name='popular'  hidden/>
            <div className={styles.radio}>
            Popular
            </div>
          </label>
          
          <label className={styles.label}>
            <input className={styles.radio} type='radio' name='unpopular'  hidden/>
            <div className={styles.radio}>
            Unpopular
            </div>
          </label>
          <label className={styles.label}>
            <input className={styles.radio} type='radio' name='cheap'  hidden/>
            <div className={styles.radio}>
            Cheap
            </div>
          </label>
          <label className={styles.label}>
            <input className={styles.radio} type='radio' name='expensive'  hidden/>
            <div className={styles.radio}>
            Expensive
            </div>
          </label>
    </form>
    </section>
    
  )
}

export default NoticesFilters





