import React from 'react';
import { AppBar, Toolbar, Typography, Box, Select, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSubject } from '../features/search/searchSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const subjects = ['All', 'Math', 'Science', 'History', 'Art'];

  const handleSubjectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setSubject(event.target.value as string));
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
