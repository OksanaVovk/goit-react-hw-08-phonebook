import { useState, useEffect } from 'react';
import { useEditeContactMutation } from 'redux/reducer';
import { createPortal } from 'react-dom';
import Spinner from './Spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const themes = createTheme();

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ id, oldname, oldnumber, onClose }) {
  const [name, setName] = useState(oldname);
  const [number, setNumber] = useState(oldnumber);

  const [editeContact, { isLoading }] = useEditeContactMutation();

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

  const patch = { name: name, number: number };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(id);
    console.log(patch);
    try {
      await editeContact({ id, patch });
      Notify.success('A contact has been successfully changed');
    } catch {
      console.log(Error);
      Notify.warning('Contact could not be saved');
    }
    reset();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  });

  const handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleBackdrop}>
      <div className="modal">
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
                    defaultValue={oldname}
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
                    defaultValue={oldnumber}
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
                  Edit contact
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>,
    modalRoot
  );
}
