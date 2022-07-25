// == Import
import React from 'react';
import './styles.scss';
import ListTodo from '../listTodo';
import tasks from '../../data/tasks';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNewTask: '',
      tasks,
    };
  }

  render() {
    return (
      <div className="app">
        <form className="form">
          <input
            type="text"
            className="form-item"
            placeholder="Ajouter une tâche"
            value={this.state.inputNewTask}

          />
        </form>
        <p className="counter">
          {
            console.log(this.state.tasks)
          }
          tâche(s) en cours
        </p>
        <ListTodo tasks={this.state.tasks} />
      </div>
    );
  }
}

// == Export
export default App;
