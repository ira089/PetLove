import React from 'react';
import { useSelector } from 'react-redux';
import {selectNews} from '../../redux/new/selectorNew'
// import { Col, Row } from 'antd';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import NewsItem from './NewsItem';
import PaginationMy from 'components/Pagination/PaginationMy';

const NewsList = () => {
  const { isLoading, error, news, totalPages } = useSelector(selectNews);
  
  // console.log(isLoading)
  
// console.log(totalPages)
 
const elements = news.map(item => (
  <Grid item xs={12} md={6} lg={4}>
          <NewsItem key={item._id} item={item}/>
        </Grid>
  ))



  return (
    <>
    {isLoading && <p>...Loading</p>}
    {error && <p>{error.message}</p>}
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={{xs: 3, sm: 4, lg: 5 }} columnSpacing={{  sm: 3, lg: 4 }}>
        {elements}
        
      </Grid>
    </Box>

{!!totalPages && totalPages !== 1 && <PaginationMy/>}

   
    </>
    
  )
}

export default NewsList