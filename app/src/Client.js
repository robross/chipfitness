import React, { Component } from 'react';
import './Client.css';

class Client extends Component {
  render() {
    const { selectedClient } = this.props;

    return (
      <div className="client-container">
        <div className="panel">
          <br/><br/><br/><br/><br/>
        </div>
        <div className="panel">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        <div className="panel">
          <br/><br/><br/><br/><br/>
        </div>
      </div >
    );
  }
}

export default Client;
