import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

export const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#FFC531',
      fontSize: '16px',
    },
    '& .MuiRating-iconEmpty': {
      color: 'rgba(38, 38, 38, 0.05);',
      fontSize: '16px',
    },
  });