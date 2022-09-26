import React from 'react';
import { useDeleteContactMutation } from 'redux/reducer';
import Tooltip from '@mui/material/Tooltip';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';
import { changeContact, toggleModal } from 'redux/actions';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
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

  const onBtnEditClick = (id, name, number) => {
    dispatch(toggleModal(true));
    dispatch(changeContact({ id: id, name: name, number: number }));
  };

  return (
    <ListItem
      key={id}
      secondaryAction={
        <ListItemAvatar>
          <Tooltip title="Edit">
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => onBtnEditClick(id, name, number)}
            >
              <ModeEditOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onBtnClick(id)}
              disabled={isDeleting}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemAvatar>
      }
    >
      <ListItemText>
        {name}:<span>{number}</span>
      </ListItemText>
    </ListItem>
    // <li key={id}>
    //   <div className="item_cont">
    //     {name}:<span>{number}</span>
    //     <button onClick={() => onBtnClick(id)} disabled={isDeleting}>
    //       {isDeleting && <Spinner />}
    //       Delete
    //     </button>
    //     <button onClick={() => onBtnEditClick(id, name, number)}>Edit</button>
    //   </div>
    // </li>
  );
};

export default ContactItem;
