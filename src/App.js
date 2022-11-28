import logo from './logo.svg';
import Navibar from './Components/Header';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navibar />
      </header>

      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={shoot}>skot og hvað?</button>
      </main>

      <footer>
        <div>Ssererda</div>
      </footer>
    </div>
  );
}

function shoot() {
  const greeting = 'Hello Function Component!';
  alert('mark');
  console.log('prófa');
  return <h1>{greeting}</h1>;
}

export default App;
