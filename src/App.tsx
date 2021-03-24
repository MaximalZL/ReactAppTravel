import React from 'react';
import './App.css';
import Panel from './components/Panel';
import Clients from './components/Clients';
class App extends React.Component {
  render() {
    return (
      <>
            <Panel/>
            <Clients/>
      </>
    );
  }
}

export default App;
