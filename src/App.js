// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import Pages from './pages';
// eslint-disable-next-line no-unused-vars
import Loading from './components/Loading';

function App() {
  const [user, setUser] = useState(null);

  const printInConsole = () => {
    const msg = 'Trabalho de DW2 - BP3097765 - Guilherme Lourenço Pereira';
    const styles = [
      'font-size: 16px',
      'font-family: monospace',
      'background: white',
      'display: inline-block',
      'color: black',
      'padding: 16px 25px',
      'border: 1px dashed;',
    ].join(';');
    // eslint-disable-next-line no-console
    console.log(msg, styles);
  };

  useEffect(() => {
    printInConsole();
    fetch('https://gitconnected.com/v1/portfolio/guilhxrmz')
      .then((res) => res.json())
      .then((userData) => {
        setTimeout(() => {
          setUser(userData);
        }, 1000);
      });
  }, []);

  if (!user) {
    return <Loading />;
  }

  return <Pages user={user} />;
}

export default App;
