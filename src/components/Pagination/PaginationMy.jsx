import React, {useState, useEffect} from 'react';
// import { Pagination } from 'antd';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import * as selectorNew from '../../redux/new/selectorNew'
import { newsThunk } from '../../redux/new/opertionsNew';
import { addPage } from '../../redux/new/searchSlice';

const PaginationMy = () => {
  const [current, setCurrent] = useState(1);
  console.log(current)
  // const onChange = (page) => {
  //   console.log(page);
  //   setCurrent(page);}

  const dispatch = useDispatch();
  const search = useSelector(selectorNew.selectSearch);
  console.log(search)
  const page = useSelector(selectorNew.selectCurrentPage);
  console.log(page)
  const totalPages = useSelector(selectorNew.selectCurrentTotalPages);
  console.log(totalPages)

  const selectPage = (num) => {
    dispatch(addPage(num))
  }
  // useEffect(() => {
  //   if(search === ''){
  //     return
  //   }
  //   dispatch(newsThunk({ search, current }));
  // }, [current, dispatch, search]);

  return (
    <Stack spacing={2}>
    <Pagination count={totalPages} page={page}
    onChange={(_, num) => selectPage(num)}
    sx={{marginY:3, marginX: 'auto'}}
     showFirstButton showLastButton />
  </Stack>
  )
}

export default PaginationMy