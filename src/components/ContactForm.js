import 'react-native-get-random-values';
import { useFetchContactsQuery } from 'redux/reducer';
import { useState } from 'react';
import { useAddContactMutation } from 'redux/reducer';
import Spinner from './Spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const themes = createTheme();

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data } = useFetchContactsQuery();

  const [createContact, { isLoading }] = useAddContactMutation();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (data) {
      const isRepead = data.some(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      );
      if (isRepead) {
        Notify.failure(`${name} is already in contacts`);
      } else {
        try {
          await createContact({ name: name, number: number });
          Notify.success('A new contact has been successfully created');
        } catch {
          console.log(Error);
          Notify.warning('Contact could not be saved');
        }
      }
      reset();
    } else {
      try {
        await createContact({ name: name, number: number });
        Notify.success('A new contact has been created');
      } catch {
        console.log(Error);
        Notify.warning('Contact could not be saved');
      }
      reset();
    }
  };

  return (
    <ThemeProvider theme={themes}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <CssBaseline />
        <Typography component="h1" variant="h5" fontWeight="bold">
          PhoneBook
        </Typography>
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <label>
              Name
              <TextField
                margin="normal"
                width="100%"
                id="name"
                autoFocus
                type="text"
                value={name}
                name="name"
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Number
              <TextField
                margin="normal"
                fullWidth
                id="phone"
                autoComplete="phone"
                autoFocus
                type="tel"
                value={number}
                name="phone"
                onChange={handleInputChange}
                required
              />
            </label>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="main_button"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Spinner />}
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
