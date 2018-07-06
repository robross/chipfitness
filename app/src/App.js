import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './App.css';
import Header from './AppHeader';
import ClientList from './ClientList';
import Client from './Client';
import Fab from './AppFab';

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
        { id: 12, name: 'Allan Savage' },
        { id: 13, name: 'Lane Harrell' },
        { id: 14, name: 'Kristopher Weisstenshiern' },
        { id: 15, name: 'Aileen Solis' },
        { id: 16, name: 'Mark Krueger' },
        { id: 17, name: 'Sofia Rhodes' },
        { id: 18, name: 'Allan Savage' },
      ],
      selectedClientId: null
    };
  }

  onClientSelected(id) {
    this.setState({ selectedClientId: id });
  }

  render() {
    const { clients, selectedClientId } = this.state;
    let selectedClient = null;
    if (selectedClientId !== null) {
      selectedClient = clients.filter(c => c.id === selectedClientId)[0];
    }

    const deselectClient = () => this.onClientSelected(null);
    const onClientSelected = (id) => this.onClientSelected(id);

    return (
      <div>
        <Header defaultTitle="Clients" selectedClient={selectedClient} onBack={deselectClient} />
        <CSSTransition in={selectedClientId === null} timeout={500} classNames="page-l" unmountOnExit>
          {state => (<ClientList clients={clients} onSelect={onClientSelected} selectedClient={selectedClient} />)}
        </CSSTransition>
        <CSSTransition in={selectedClientId !== null} timeout={500} classNames="page-r" unmountOnExit>
          {state => (<Client selectedClient={selectedClient} />)}
        </CSSTransition>
        <Fab/>
      </div >
    );
  }
}

export default App;
