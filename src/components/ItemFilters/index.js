import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import { setShowCompleted } from '../../logic/itemFilters';

export const ItemFilters = ({ showCompleted, setShowCompleted }) => {
  return (
    <div>
      <input
        id="show-completed-filter"
        type="checkbox"
        checked={showCompleted}
        onChange={() => setShowCompleted(!showCompleted)}
      />
      <label htmlFor="show-completed-filter">Show completed items</label>
    </div>
  );
};

ItemFilters.propTypes = {
  showCompleted: PropTypes.bool.isRequired,
  setShowCompleted: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { showCompleted: state.itemFilters.showCompleted };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setShowCompleted: (show) => dispatch(setShowCompleted(show)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemFilters);
