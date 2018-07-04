import React, { Component } from 'react';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    const { defaultTitle, selectedClient, onBack } = this.props;
    const isDrill = selectedClient !== null;

    let headerClassName = 'app-header';
    let selectedTitle = '\u00A0';
    let onDefaultClick = () => null;

    if (isDrill) {
      headerClassName += ' app-header-drill';
      selectedTitle = selectedClient.name;
      onDefaultClick = onBack;
    }

    return (
      <div className={headerClassName}>
        <div className="back-arrow" onClick={onDefaultClick}><i className="fal fa-chevron-left"></i></div>
        <h1 className="default" onClick={onDefaultClick}>{defaultTitle}</h1>
        <h1 className="selected">{selectedTitle}</h1>
      </div>
    );
  }
}

export default AppHeader;
