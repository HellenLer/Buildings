import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Options from './comps/options';
import Rectangle from './comps/rectangle';
import Triangular from './comps/triangular';
import Exit from './comps/exit';

export default function AppRouter(props) {
  return (
    <Routes >
      <Route className="route" path='/' element={<Options />} >
        <Route className="route" path="/rectangle" element={<Rectangle />} />
        <Route className="route" path="/triangular" element={<Triangular />} />
      </Route>
      <Route className="route" path='/exit' element={<Exit />} />
    </Routes>
  );
}


