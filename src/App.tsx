import { Route, Routes } from 'react-router-dom';

import Add from './pages/Add';
import Check from './pages/Check';
import Dictionary from './pages/Dictionary';
import History from './pages/History';
import { NavBar, Result } from './components';

import './App.scss';
import './reset.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Dictionary />} />
          <Route path="/add" element={<Add />} />
          <Route path="/check" element={<Check />} />
          <Route path="/history" element={<History />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
