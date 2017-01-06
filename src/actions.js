import { createAction } from 'redux-actions';
import {
  FETCH_LIST,
  FILTER_LIST,
  CREATE_ITEM,
  DELETE_ITEM,
  ARCHIVE_ITEM
} from './constants';


export const fetchList = createAction(FETCH_LIST, (text) => {

});

export const handleKeyUp = (e) => (dispatch) => {
  console.log('keycode', e.keyCode);
  if (e.keyCode === 13) {
    console.log('create', e.target.value);
    dispatch(createItem(e.target.value));
  } else {
  }
};

export const createItem = createAction(CREATE_ITEM, (text) => {

});

export const deleteItem = createAction(DELETE_ITEM, () => {

});
