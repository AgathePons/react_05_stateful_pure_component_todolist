// == Import
import React from 'react';

import './styles.scss';

import Form from '../Form';
import Counter from '../Counter';
import List from '../List';

import taskData from '../../data/tasks';

// == Composant
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: taskData,
      newTaskText: '',
    };

    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
    this.handleTaskFormSubmit = this.handleTaskFormSubmit.bind(this);
  }

  handleTaskInputChange(event) {
    this.setState({ newTaskText: event.target.value });
  }

  handleTaskFormSubmit(event) {
    const { newTaskText, tasks } = this.state;
    event.preventDefault();
    console.log('new task', newTaskText);
    const ids = tasks.map((t) => t.id);
    const newId = Math.max(...ids) + 1;
    const newTask = {
      id: newId,
      label: newTaskText,
      done: false,
    };
    this.setState({
      newTaskText: '',
      tasks: [...tasks, newTask],
    });
  }

  render() {
    const { newTaskText, tasks } = this.state;
    return (
      <div className="app">
        <Form
          newTaskText={newTaskText}
          onTaskInputChange={this.handleTaskInputChange}
          onTaskFormSubmit={this.handleTaskFormSubmit}
        />
        <Counter nbOfOngoingTasks={tasks.filter((t) => !t.done).length} />
        <List
          taskList={tasks}
        />
      </div>
    );
  }
}

// == Export
export default App;
