import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../features/search/searchSlice';
import { RootState } from '../store';
import { TextField, Button, Box } from '@mui/material';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
      <TextField fullWidth label="Search Media" value={query} onChange={handleSearch} />
      <Button variant="contained" onClick={() => dispatch(setQuery(''))}>
        Reset
      </Button>
    </Box>
  );
};

export default SearchBar;
