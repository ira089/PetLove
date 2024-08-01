import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectNews} from '../../redux/new/selectorNew'
// import { Col, Row } from 'antd';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import NewsItem from './NewsItem';
import { newsThunk } from '../../redux/new/opertionsNew';
import PaginationMy from 'components/Pagination/PaginationMy';

const NewsList = () => {
  // const [news, setNews] = useState([]);
  const { isLoading, error, news } = useSelector(selectNews);
  
  console.log(news)
  const pageQty = news.totalPages
console.log(pageQty)
  const dispatch = useDispatch();
  

  // const [searh, setSearh] = useState('cat');
  // const [page, setPage] = useState(1);
  // const [pageQty, setPageQty] = useState(0);

  // totalPages results

//   useEffect(() => {
// dispatch(newsThunk({searh, page}))

//   },[ dispatch, page, searh])


  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <NewsItem>1</NewsItem>
        </Grid>
        <Grid item xs={12}>
          <NewsItem>4</NewsItem>
        </Grid>
      </Grid>
    </Box>

{/* {!!pageQty && pageQty !== 1 && <PaginationMy/>} */}
<PaginationMy/>
   
    </>
    
  )
}

export default NewsList