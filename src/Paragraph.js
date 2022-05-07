import React from 'react';

// Propsy są dostepne w obiekcie
// this.props -> obiekt
// this.props.name -> 
//    gdzie "name" to nazwa atrybutu z wywołania JSX

class Paragraph extends React.Component {
    intervalId = null;

    constructor() {
        super();

        this.state = {
            counter: 0,
        }

        this.startInterval();
    }

    startInterval = () => {
        this.intervalId = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1,
            });
        }, 1000);
    }

    handleResetClick = () => {
        this.setState({
            counter: 0,
        })
    }

    handleStopClick = () => {
        clearInterval(this.intervalId);
    }

    handleStartClick = () => {
        clearInterval(this.intervalId);

        this.startInterval();
    }

    render() {
        return <div>
                <button onClick={this.handleResetClick}>Wyzeruj!</button>
                <button onClick={this.handleStopClick}>Zatrzymaj!</button>
                <button onClick={this.handleStartClick}>Wystartuj!</button>
                <p>
                    {this.state.counter < 5 ? null : <strong>UWAGA!</strong>}
                    Licznik: {this.state.counter}
                </p>
        </div>
    }
}

export default Paragraph;