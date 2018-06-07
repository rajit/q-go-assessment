import React from 'react';
import { shallow } from 'enzyme';
import { applyFilters, ItemsList } from '../index';

const defaultProps = {
  items: [],
  onDelete: () => {},
  onComplete: () => {},
};

describe('applyFilters', () => {
  it('should do nothing if itemFilters is empty', () => {
    const items = [
      { id: 1, content: 'Test 1', complete: false },
      { id: 2, content: 'Test 2', complete: false },
    ];
    const FilteredList = applyFilters(ItemsList);
    const renderedItem = shallow(
      <FilteredList {...defaultProps} items={items} />,
    );
    expect(renderedItem.props()).toHaveProperty('items');
    expect(renderedItem.props().items).toHaveLength(2);
  });

  it('should remove completed items if itemFilters.showCompleted is true', () => {
    const items = [
      { id: 1, content: 'Test 1', complete: false },
      { id: 2, content: 'Test 2', complete: true },
    ];
    const FilteredList = applyFilters(ItemsList);
    const renderedItem = shallow(
      <FilteredList
        {...defaultProps}
        items={items}
        itemFilters={{ showCompleted: false }}
      />,
    );
    expect(renderedItem.props()).toHaveProperty('items');
    expect(renderedItem.props().items).toHaveLength(1);
    expect(renderedItem.props().items[0]).toHaveProperty('content', 'Test 1');
  });
});
