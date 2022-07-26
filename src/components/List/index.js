// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
function List({ taskList, onTaskStatusChange }) {
  return (
    <ul className="list">
      {
        taskList
          .map((task) => (
            <li key={task.id}>
              <label
                htmlFor={`task-${task.id}`}
                className={task.done ? 'list-item list-item--done' : 'list-item'}
              >
                <input
                  id={`task-${task.id}`}
                  type="checkbox"
                  checked={task.done}
                  onChange={() => onTaskStatusChange(task.id)}
                />
                {task.label}
              </label>
            </li>
          ))
          .sort((a) => {
            if (!a.done) {
              return -1;
            }
            if (a.done) {
              return 1;
            }
            return 0;
          })
      }
    </ul>
  );
}

List.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  onTaskStatusChange: PropTypes.func.isRequired,
};

// == Export
export default List;
