// == Import
import PropTypes from 'prop-types';

// == Composant
function Task({ id, label, done }) {
  return (
    <li>
      <label className={done ? 'list-item list-item--done' : 'list-item'} htmlFor={label}>
        <input name={label} id={id} type="checkbox" checked={!!done} />
        {label}
      </label>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

// == Export
export default Task;
