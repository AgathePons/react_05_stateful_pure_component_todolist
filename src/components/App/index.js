// == Import
import React from 'react';

import './styles.scss';

import Form from '../Form';
import Counter from '../Counter';
import List from '../List';

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
    this.handleNewTaskSubmit = this.handleNewTaskSubmit.bind(this);
    this.handleTaskDoneChange = this.handleTaskDoneChange(this);
  }

  handleNewTaskInputChange(e) {
    console.log('change', e.target.value);
    this.setState({
      inputNewTask: e.target.value,
    });
  }

  handleNewTaskSubmit(e) {
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

  handleTaskDoneChange(label) {
    console.log('checkbox changes', label);
    this.setState({

    });
  }

  render() {
    return (
      <div className="app">
        <form className="form" onSubmit={this.handleNewTaskSubmit}>
          <input
            type="text"
            className="form-item"
            placeholder="Ajouter une tâche"
            value={this.state.inputNewTask}
            onChange={this.handleNewTaskInputChange}
          />
        </form>
        <Form />
        <Counter />
        <p className="counter">
          {this.state.tasks.filter((task) => task.done === false).length}
          &nbsp;tâche(s) en cours
        </p>
        <List
          tasks={this.state.tasks}
          onTaskDoneChange={this.handleTaskDoneChange}
        />
      </div>
    );
  }
}

// == Export
export default App;
