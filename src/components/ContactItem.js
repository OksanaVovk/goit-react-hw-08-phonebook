import React from 'react';
import { useDeleteContactMutation } from 'redux/reducer';
import Spinner from './Spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ContactItem = ({ id, name, number, onBtnEditClick }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const onBtnClick = async id => {
    try {
      await deleteContact(id);
      Notify.success('The contact has been deleted');
    } catch {
      console.log(Error);
      Notify.warning('Deletion error');
    }
  };

  return (
    <li key={id}>
      <div className="item_cont">
        {name}:<span>{number}</span>
        <button onClick={() => onBtnClick(id)} disabled={isDeleting}>
          {isDeleting && <Spinner />}
          Delete
        </button>
        <button onClick={() => onBtnEditClick(id, name, number)}>Edit</button>
      </div>
    </li>
  );
};

export default ContactItem;
