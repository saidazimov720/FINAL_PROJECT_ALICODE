import React from 'react';
import { AppBar, Toolbar, Typography, Box, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSubject } from '../features/search/searchSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const subjects = ['All', 'Math', 'Mother Language', 'History', 'Biology', 'Physics', 'English', 'Russian', 'Physical education'];

  
  const handleSubjectChange = (event: SelectChangeEvent<string>) => {
    dispatch(setSubject(event.target.value));
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Edu-Media Platform
        </Typography>
        <Box>
          <Select
            defaultValue="All"
            onChange={handleSubjectChange}
            sx={{ color: 'white', borderColor: 'white' }}
          >
            {subjects.map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
