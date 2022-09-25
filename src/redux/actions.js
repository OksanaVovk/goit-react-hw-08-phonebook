import { createAction } from '@reduxjs/toolkit';

export const add = createAction('items/add');
export const remove = createAction('items/remove');
export const changeFilter = createAction('filter/changeFilter');
export const changeContact = createAction('contactItem/changeContact');
export const toggleModal = createAction('showModal/toggleModal');
