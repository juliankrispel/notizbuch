import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import { FETCH_LIST, CREATE_ITEM, DELETE_ITEM } from './constants';

export default handleActions({
  [FETCH_LIST]: (state, action) => {
    console.log(FETCH_LIST, action);
    return state;
  },

  [CREATE_ITEM]: (state, action) => {
    console.log(CREATE_ITEM, action);
    return state;
  },
}, List([]));
