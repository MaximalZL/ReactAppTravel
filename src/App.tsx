import React from 'react';
import './App.css';
import MyCard from './components/MyCard';
import MyCards from './components/MyCards';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello world</h1>
        <h2>Hey</h2>
        <MyCards/>
      </>
    );
  }
}

export default App;
