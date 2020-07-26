import React from 'react';
//import logo from './logo.svg';
import Menu from './components/Menu';
import './sass/App.scss';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Menu class="App-header"/>
      <Content />
    </div>
  );
}

export default App;
