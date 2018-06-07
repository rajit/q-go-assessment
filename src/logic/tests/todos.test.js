import reducer, {
  initialState,
  addItem,
  deleteItem,
  setItemComplete,
} from '../todos';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first', complete: false },
        { id: 2, content: 'second', complete: false },
      ],
    };
    const mockAction = addItem('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
  });

  it('should delete given item on DELETE_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first', complete: false },
        { id: 2, content: 'second', complete: false },
      ],
    };
    const mockAction = deleteItem(2);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].id).toEqual(1);
    expect(result.items[0].content).toEqual('first');
  });

  it('should mark item complete on SET_ITEM_COMPLETE true', () => {
    const state = {
      items: [
        { id: 1, content: 'first', complete: false },
        { id: 2, content: 'second', complete: false },
      ],
    };
    const mockAction = setItemComplete({ id: 1, complete: true });
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[0].complete).toEqual(true);
    expect(result.items[1].complete).toEqual(false);
  });

  it('should un-mark item complete on SET_ITEM_COMPLETE false', () => {
    const state = {
      items: [
        { id: 1, content: 'first', complete: true },
        { id: 2, content: 'second', complete: true },
      ],
    };
    const mockAction = setItemComplete({ id: 2, complete: false });
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[0].complete).toEqual(true);
    expect(result.items[1].complete).toEqual(false);
  });
});
