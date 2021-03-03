import React from 'react';
import './App.css';
import Clients from './components/Clients';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>База данных</h1>
            <Clients/>
      </>
    );
  }
}

export default App;
