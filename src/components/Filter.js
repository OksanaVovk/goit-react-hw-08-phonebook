import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Filter = ({ id, value, onChange }) => (
  <Box
    sx={{
      width: 500,
      maxWidth: '100%',
      padding: '20px 24px',
    }}
  >
    <Typography
      component="h1"
      variant="h5"
      fontWeight="bold"
      marginTop="32px"
      marginBottom="32px"
    >
      Contacts
    </Typography>
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
      label="Find contacts by name"
      id={id}
      type="text"
      value={value}
      name="filter"
      onChange={onChange}
    />
  </Box>
);

export default Filter;
