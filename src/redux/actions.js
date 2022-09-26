import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('filter/changeFilter');
export const changeContact = createAction('contactItem/changeContact');
export const toggleModal = createAction('showModal/toggleModal');
