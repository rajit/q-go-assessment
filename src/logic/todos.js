import { createAction, handleActions } from 'redux-actions';

export const addItem = createAction('qgo/assessment/ADD_ITEM');
export const deleteItem = createAction('qgo/assessment/DELETE_ITEM');
export const setItemComplete = createAction('qgo/assessment/SET_ITEM_COMPLETE');

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', complete: false },
    { id: 2, content: 'Buy cat food', complete: false },
    { id: 3, content: 'Water the plants', complete: false },
  ],
};

const reducer = handleActions(
  {
    [addItem](state, { payload }) {
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: payload,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    },
    [deleteItem](state, { payload: id }) {
      return {
        ...state,
        items: state.items.filter((i) => i.id !== id),
      };
    },
    [setItemComplete](state, { payload }) {
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.id === payload.id) {
            return { ...i, complete: payload.complete };
          }
          return i;
        }),
      };
    },
  },
  initialState,
);

export default reducer;
