import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import Add from './pages/Add';
import Check from './pages/Check';
import Dictionary from './pages/Dictionary';
import History from './pages/History';
import './reset.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Dictionary />}>
            Dictionary
          </Route>
          <Route path="/add" element={<Add />}>
            Add
          </Route>
          <Route path="/check" element={<Check />}>
            Check
          </Route>
          <Route path="/history" element={<History />}>
            History
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
