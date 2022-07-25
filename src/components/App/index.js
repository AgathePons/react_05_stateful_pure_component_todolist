// == Import
import React from 'react';

import './styles.scss';

import Form from '../Form';
import Counter from '../Counter';
import List from '../List';

import taskData from '../../data/tasks';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: taskData,
      newTaskText: '',
    };

    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
  }

  handleTaskInputChange(event) {
    this.setState({ newTaskText: event.target.value });
  }

  render() {
    const { newTaskText, tasks } = this.state;
    return (
      <div className="app">
        <Form
          newTaskText={newTaskText}
          onTaskInputChange={this.handleTaskInputChange}
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
