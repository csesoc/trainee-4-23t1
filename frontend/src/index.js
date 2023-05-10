import React from 'react';
import './index.css';
import MapView from './pages/MapView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
  const token = localStorage.getItem('token');
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapView/>} />
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
