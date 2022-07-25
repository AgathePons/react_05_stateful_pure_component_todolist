// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
function Form({ newTaskText, onTaskInputChange, onTaskFormSubmit }) {
  return (
    <form className="form" onSubmit={onTaskFormSubmit}>
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={newTaskText}
        onChange={onTaskInputChange}
      />
    </form>
  );
}

Form.propTypes = {
  newTaskText: PropTypes.string.isRequired,
  onTaskInputChange: PropTypes.func.isRequired,
  onTaskFormSubmit: PropTypes.func.isRequired,
};

// == Export
export default Form;
