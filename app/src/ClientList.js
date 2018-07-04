import React, { Component } from 'react';
import './ClientList.css';

class ClientList extends Component {
  render() {
    const { clients, onSelect, selectedClient } = this.props;
    
    const clientListItems = clients.map(c => {
      const onClientSelected = () => onSelect(c.id);
      return (<li key={c.id} onClick={onClientSelected}>{c.name}</li>)
    });
    
    let containerClassName = 'client-list-container';
    if (selectedClient !== null){
      containerClassName += ' client-list-container-off';
    }

    return (
      <div className={containerClassName}>
        <ul className="list-clients">
          {clientListItems}
        </ul>
      </div >
    );
  }
}

export default ClientList;
