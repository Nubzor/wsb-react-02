import React from 'react';

import './Countdown.css';

class Countdown extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 10,
        };

        setInterval(() => {
            this.setState({
                counter: this.state.counter - 1,
            })
        }, 1000);
    }

    render() {
        if (this.state.counter === -5) {
            // it may not work if the window was opened by human
            window.close();
        }

        return <div className="countdown">
            {this.state.counter > 0
                ? `Odliczanie: ${this.state.counter}`
                : <div className="danger">H@CKED!!!</div>
            }
        </div>
    }
}

export default Countdown;