import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import * as selectorNew from '../../redux/new/selectorNew'
import { addPage } from '../../redux/new/searchSlice';

const PaginationMy = () => {
  

  const dispatch = useDispatch();
  const {page} = useSelector(selectorNew.selectSearch);
 
 
  console.log(page)
  const totalPages = useSelector(selectorNew.selectCurrentTotalPages);
  console.log(totalPages)

  const selectPage = (num) => {
    dispatch(addPage(num))
  }
  
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