import React, { Component } from 'react';
import './AppFab.css';

class AppFab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    onClick () {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const onClick = () => this.onClick();
        const action1Up = () => alert('1');
        let className = '';
        if (this.state.open) {
            className += 'app-fab-open';
        }

        return (
            <div className={className}>
                <div className="app-fab" onClick={onClick}>
                    <i class="fal fa-clipboard-list"></i>
                </div>
                <div className="app-fab-action app-fab-action-1">1</div>
                <div className="app-fab-action app-fab-action-2">2</div>
                <div className="app-fab-action app-fab-action-3">3</div>
                <div className="app-fab-action app-fab-action-4">4</div>
                <div className="app-fab-action app-fab-action-5">5</div>
                <div className="app-fab-action app-fab-action-6">6</div>
                <div className="app-fab-action app-fab-action-7">7</div>
            </div>
        );
    }
}

export default AppFab;
