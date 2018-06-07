import reducer, { initialState, setShowCompleted } from '../itemFilters';

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
  it('should set showCompleted to false on SET_SHOW_COMPLETED false', () => {
    const state = {
      showCompleted: true,
    };
    const mockAction = setShowCompleted(false);
    const result = reducer(state, mockAction);
    expect(result.showCompleted).toEqual(false);
  });
  it('should set showCompleted to true on SET_SHOW_COMPLETED true', () => {
    const state = {
      showCompleted: false,
    };
    const mockAction = setShowCompleted(true);
    const result = reducer(state, mockAction);
    expect(result.showCompleted).toEqual(true);
  });
});
