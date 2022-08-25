import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/Home';
import RocketsPage from './pages/RocketsPage';
import MissionsPage from './pages/MissionsPage';
import DragonsPage from './pages/DragonsPage';
import Summary from './pages/Summary';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/rockets" element={<RocketsPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/dragons" element={<DragonsPage />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </div>
  );
}

export default App;
