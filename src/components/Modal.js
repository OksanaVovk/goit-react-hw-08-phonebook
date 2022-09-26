// import { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, changeContact } from 'redux/actions';
import { AiOutlineClose } from 'react-icons/ai';

const themes = createTheme();

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const contactItem = useSelector(state => state.fatch.contactItem);
  const [name, setName] = useState(contactItem.name);
  const [number, setNumber] = useState(contactItem.number);

  const dispatch = useDispatch();

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
  const id = contactItem.id;

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await editeContact({ id, patch });
      Notify.success('A contact has been successfully changed');
      reset();
      dispatch(toggleModal(false));
      dispatch(changeContact({ id: null, name: null, number: null }));
    } catch {
      console.log(Error);
      Notify.warning('Contact could not be saved');
      reset();
      dispatch(toggleModal(false));
      dispatch(changeContact({ id: null, name: null, number: null }));
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModal(false));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  });

  const onBtnClick = () => {
    dispatch(toggleModal(false));
  };

  return createPortal(
    <div className="overlay">
      <div className="modal">
        <button onClick={() => onBtnClick()} className="modal_button">
          <AiOutlineClose />
        </button>
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
                    defaultValue={contactItem.name}
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
                    defaultValue={contactItem.number}
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
