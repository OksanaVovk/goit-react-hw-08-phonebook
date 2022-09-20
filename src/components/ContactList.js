import ContactItem from './ContactItem';
import React from 'react';

const ContactList = ({ contactArray }) => (
  <ul>
    {contactArray.map(contact => (
      <ContactItem
        id={contact.id}
        name={contact.name}
        number={contact.number}
      />
    ))}
  </ul>
);

export default ContactList;
