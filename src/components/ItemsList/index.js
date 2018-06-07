import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapProps } from 'recompose';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import './styles.css';
import { deleteItem, setItemComplete } from '../../logic/todos';

export const ItemsList = ({ items, onDelete, onComplete }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => onComplete(item.id, !item.complete)}
            />
            {item.content}
            <DeleteButton onClick={() => onDelete(item.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const applyFilters = mapProps((props) => {
  return {
    ...props,
    items:
      !props.itemFilters || props.itemFilters.showCompleted
        ? props.items
        : props.items.filter((i) => !i.complete),
  };
});

const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    itemFilters: state.itemFilters,
    items: state.todos.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(deleteItem(id)),
    onComplete: (id, complete) => dispatch(setItemComplete({ id, complete })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  applyFilters(ItemsList),
);
