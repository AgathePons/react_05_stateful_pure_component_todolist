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

    this.handleNewTaskInputChange = this.handleNewTaskInputChange.bind(this);
    this.onNewTaskSubmit = this.onNewTaskSubmit.bind(this);
  }

  handleNewTaskInputChange(e) {
    console.log('change', e.target.value);
    this.setState({
      inputNewTask: e.target.value,
    });
  }

  onNewTaskSubmit(e) {
    e.preventDefault();
    console.log('submit', this.state.inputNewTask);
    this.state.tasks.push({
      id: 100,
      label: this.state.inputNewTask,
      done: false,
    });
    this.setState({
      tasks,
    });
  }

  render() {
    return (
      <div className="app">
        <form className="form" onSubmit={this.onNewTaskSubmit}>
          <input
            type="text"
            className="form-item"
            placeholder="Ajouter une tâche"
            value={this.state.inputNewTask}
            onChange={this.handleNewTaskInputChange}
          />
        </form>
        <p className="counter">
          {this.state.tasks.filter((task) => task.done === false).length}
          &nbsp;tâche(s) en cours
        </p>
        <ListTodo tasks={this.state.tasks} />
      </div>
    );
  }
}

// == Export
export default App;
