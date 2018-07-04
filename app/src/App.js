import React, { Component } from 'react';
import './App.css';
import Header from './AppHeader'

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
        { id: 8, name: 'Kristopher Weisstenshiern' },
        { id: 9, name: 'Aileen Solis' },
        { id: 10, name: 'Mark Krueger' },
        { id: 11, name: 'Sofia Rhodes' },
        { id: 12, name: 'Allan Savage' }
      ],
      selectedClientId: null
    };
  }

  onClientSelected(id){
    this.setState({ selectedClientId: id });
  }

  render() {
    const { clients, selectedClientId } = this.state;
    let selectedClient = null;
    if (selectedClientId !== null) {
      selectedClient = clients.filter(c => c.id === selectedClientId)[0];
    }

    const clientListItems = clients.map(c => {
      const onClientSelected = () => this.onClientSelected(c.id);
      return (<li key={c.id} onClick={onClientSelected}>{c.name}</li>)
    });
    
    const deselectClient = () => this.onClientSelected(null);

    return (
      <div>
        <Header defaultTitle="Clients" selectedClient={selectedClient} onBack={deselectClient}/>
        <ul className="list-clients">
          {clientListItems}
        </ul>
      </div >
    );
  }
}

export default App;
