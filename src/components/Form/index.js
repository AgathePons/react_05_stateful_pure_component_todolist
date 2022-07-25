// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
function Form() {
  return (
    <form className="form">
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value=""
      />
    </form>
  );
}

Form.propTypes = {

};

// == Export
export default Form;
