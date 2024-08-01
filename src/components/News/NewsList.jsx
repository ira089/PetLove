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
  const { isLoading, error, news } = useSelector(selectNews);
  
  
  console.log(news)
  // const pageQty = news.totalPages
// console.log(pageQty)
 
const elements = news.map(item => (
  <Grid item xs={12} md={6} lg={4}>
          <NewsItem  item={item}/>
        </Grid>
  ))



  return (
    <>
    {isLoading && <p>...Loading</p>}
    {error && <p>{error.message}</p>}
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {elements}
        
      </Grid>
    </Box>

{/* {!!pageQty && pageQty !== 1 && <PaginationMy/>} */}
<PaginationMy/>
   
    </>
    
  )
}

export default NewsList