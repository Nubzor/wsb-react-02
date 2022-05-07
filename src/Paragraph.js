import React from 'react';

// Propsy są dostepne w obiekcie
// this.props -> obiekt
// this.props.name -> 
//    gdzie "name" to nazwa atrybutu z wywołania JSX

class Paragraph extends React.Component {
    render() {
        return <p>
            Nazywam się {this.props.name} {this.props.surname}
        </p>
    }
}

export default Paragraph;