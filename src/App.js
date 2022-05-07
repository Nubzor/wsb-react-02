import './App.css';
import React from 'react';

import Img from './Img';
import Paragraph from './Paragraph';
import Link from './Link';

// 1 - wydzielnie img do osobnego komponentu funkcyjnego
// 2 - wydzielenie paragrafu (<p>) do osobnego komponentu klasowego

// 3 - wydzielnie elementu <a>
// do osobnego komponentu klasowego

const paragrafData = [
  {
    name: 'Mateusz',
    surname: 'Marzecki',
  },
  {
    name: 'Ala',
    surname: 'Trololo',
  },
  {
    name: 'Ola',
    surname: 'Tralalal',
  },
  {
    name: 'Ela',
    surname: 'Czaczacza',
  },
  {
    name: 'Dawid',
    surname: 'FooBarFoo',
  },
  {
    name: 'Asia',
    surname: 'Kasia',
  },
  {
    name: 'Jan',
    surname: 'Niezbedny',
  }
];

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <Img />
          { paragrafData.map(function(element) {
              // element -> obiekt { name: 'xxx', surname: 'yyy' }
              return <Paragraph name={element.name} surname={element.surname} />
          }) }
          <div></div>
          <Link
            name="Learn React"
            href="https://reactjs.org" />
          <Link
            name="Wirtualna Polska"
            href="https://wp.pl" />
          <Link
            name="Onet"
            href="https://onet.pl" />
          <Link
            name="Interia"
            href="https://interia.pl" />
          <Link
            name="Trójmiasto.pl"
            href="https://trojmiasto.pl" />

        </header>
      </main>
    );
  }
}

export default App;
