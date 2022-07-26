// == Import
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
class Form extends React.Component {
  constructor(props) {
    super(props);
    // we create a ref (empty for now), which will allow us to access the DOM input element
    // the ref will be updated by React at each new render
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // myRef.current --> access to the DOM element as it is since the last render
    // and focus on it
    this.inputRef.current.focus();
  }

  render() {
    const { onTaskFormSubmit, onTaskInputChange, newTaskText } = this.props;
    return (
      <form className="form" onSubmit={onTaskFormSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="form-item"
          placeholder="Ajouter une tâche"
          value={newTaskText}
          onChange={onTaskInputChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  newTaskText: PropTypes.string.isRequired,
  onTaskInputChange: PropTypes.func.isRequired,
  onTaskFormSubmit: PropTypes.func.isRequired,
};

// == Export
export default Form;
