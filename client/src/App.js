import './App.css';
import { useState } from 'react';
import SearchBar from './Componentes/SEARCHBAR/SearchBar';
import Card from './Componentes/CARD/Card'

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <h1>Henry Countries</h1>
    </div>
  );
}

export default App;
