import './App.css';
import React from 'react';

import Img from './Img';
import Counter from './Counter';
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
];

const linkData = [
  {
    name: 'Learn React',
    href: 'https://reactjs.org',
  },
  {
    name: 'Wirtualna Polska',
    href: 'https://wp.pl',
  },
  {
    name: 'Onet',
    href: 'https://onet.pl',
  },
  {
    name: 'Interia',
    href: 'https://interia.pl',
  },
  {
    name: 'Trójmiasto.pl',
    href: 'https://trojmiasto.pl',
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
              return <Counter />
          }) }
          <div></div>
          { linkData.map(function(element) {
            // element -> obiekt { name: 'xxx', href: 'yyy' }
            return <Link name={element.name} href={element.href} />
          })}
        </header>
      </main>
    );
  }
}

export default App;
