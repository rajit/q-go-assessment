import { createAction, handleActions } from 'redux-actions';

export const setShowCompleted = createAction(
  'qgo/assessment/SET_SHOW_COMPLETED',
);

export const initialState = {
  showCompleted: false,
};

const reducer = handleActions(
  {
    [setShowCompleted](state, { payload: showCompleted }) {
      return {
        ...state,
        showCompleted,
      };
    },
  },
  initialState,
);

export default reducer;
