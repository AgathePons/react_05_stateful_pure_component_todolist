// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
function Counter({ nbOfOngoingTasks }) {
  return (
    <p className="counter">{nbOfOngoingTasks} tâche(s) en cours</p>
  );
}

Counter.propTypes = {
  nbOfOngoingTasks: PropTypes.number.isRequired,
};

// == Export
export default Counter;
