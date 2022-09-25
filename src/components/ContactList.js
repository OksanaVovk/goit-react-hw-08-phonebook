import ContactItem from './ContactItem';
import React from 'react';

const ContactList = ({ contactArray, onBtnEditCl }) => (
  <ul>
    {contactArray.map(contact => (
      <ContactItem
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onBtnEditClick={onBtnEditCl}
      />
    ))}
  </ul>
);

export default ContactList;
