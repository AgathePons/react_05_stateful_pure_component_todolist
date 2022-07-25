// == Import
import PropTypes from 'prop-types';
import './styles.scss';

import Task from './task';

// == Composant
function List({ tasks, onTaskDoneChange }) {
  return (
    <ul className="list">
      {
        tasks
          .map((item) => (
            <Task
              key={item.id}
              id={item.id}
              label={item.label}
              done={item.done}
              onTaskDoneChange={onTaskDoneChange}
            />
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
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onTaskDoneChange: PropTypes.func.isRequired,
};

// == Export
export default List;
