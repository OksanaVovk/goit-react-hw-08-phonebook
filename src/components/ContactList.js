import ContactItem from './ContactItem';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';

const ContactList = ({ contactArray }) => (
  <Box sx={{ flexGrow: 1, maxWidth: 500 }} paddingLeft="8px">
    <Grid>
      <Grid item xs={12} md={6}>
        <List>
          {contactArray.map(contact => (
            <ContactItem
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </List>
      </Grid>
    </Grid>
  </Box>
);

export default ContactList;
