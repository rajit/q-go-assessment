import React from 'react';
import { shallow } from 'enzyme';
import { ItemFilters } from '../index';

const defaultProps = {
  showCompleted: false,
  setShowCompleted: () => {},
};

describe('ItemFilters', () => {
  it('renders without crashing', () => {
    shallow(<ItemFilters {...defaultProps} />);
  });
  it('should display a showCompleted checkbox', () => {
    const renderedFilters = shallow(<ItemFilters {...defaultProps} />);
    expect(renderedFilters.find('#show-completed-filter')).toHaveLength(1);
  });
  it('should display a checked showCompleted checkbox if showCompleted is true', () => {
    const renderedFilters = shallow(
      <ItemFilters {...defaultProps} showCompleted={true} />,
    );
    const showCompletedAttributes = renderedFilters
      .find('#show-completed-filter')
      .props();
    expect(showCompletedAttributes).toHaveProperty('checked', true);
  });
});
