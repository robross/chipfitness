import React, { Component } from 'react';
import './ClientList.css';

class ClientList extends Component {
  render() {
    const { clients, onSelect } = this.props;
    
    const clientListItems = clients.map(c => {
      const onClientSelected = () => onSelect(c.id);
      return (<li key={c.id} onClick={onClientSelected}>{c.name}</li>)
    });
    
    return (
      <div className="client-list-container">
        <ul className="list-clients">
          {clientListItems}
        </ul>
      </div >
    );
  }
}

export default ClientList;
