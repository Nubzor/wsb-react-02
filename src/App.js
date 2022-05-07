import './App.css';
import React from 'react';

import Img from './Img';
import Paragraph from './Paragraph';
import Link from './Link';

// 1 - wydzielnie img do osobnego komponentu funkcyjnego
// 2 - wydzielenie paragrafu (<p>) do osobnego komponentu klasowego

// 3 - wydzielnie elementu <a>
// do osobnego komponentu klasowego

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <Img />
          <Paragraph name="Mateusz" surname="Marzecki" />
          <Paragraph name="Ala" surname="Trololo" />
          <Paragraph name="Ola" surname="Tralalal" />
          <Paragraph name="Ela" surname="Czaczacza" />
          <Paragraph name="Dawid" surname="FooBarFoo" />
          <div></div>
          <Link />
        </header>
      </main>
    );
  }
}

export default App;
