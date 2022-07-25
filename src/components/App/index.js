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
      
    };
  }

  render() {
    return (
      <div className="app">
        <Form />
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
