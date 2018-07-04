import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [
        { id: 1, name: 'Tommy Preston' },
        { id: 2, name: 'Jamison Abbott' },
        { id: 3, name: 'Aida Mccoy' },
        { id: 4, name: 'Lawrence Duffy' },
        { id: 5, name: 'Omer Salinas' },
        { id: 6, name: 'Phyllis Bass' },
        { id: 7, name: 'Lane Harrell' },
        { id: 8, name: 'Kristopher Weiss' },
        { id: 9, name: 'Aileen Solis' },
        { id: 10, name: 'Mark Krueger' },
        { id: 11, name: 'Sofia Rhodes' },
        { id: 12, name: 'Allan Savage' }
      ],
      selectedClient: null
    };
  }

  render() {
    const clientListItems = this.state.clients.map(c => <li key={c.id}>{c.name}</li>);

    return (
      <div>
        <h1>Clients</h1>
        <ul className="list-clients">
          {clientListItems}
        </ul>
      </div>
    );
  }
}

export default App;
