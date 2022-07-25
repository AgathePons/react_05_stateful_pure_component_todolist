// == Import
import PropTypes from 'prop-types';

// == Composant
function Task({
  id,
  label,
  done,
  onTaskDoneChange,
}) {
  return (
    <li onClick={onTaskDoneChange}>
      <label
        className={done ? 'list-item list-item--done' : 'list-item'}
        htmlFor={label}
      >
        <input
          type="checkbox"
          name={label}
          id={label}
        />
        {label}
      </label>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onTaskDoneChange: PropTypes.func.isRequired,
};

// == Export
export default Task;
