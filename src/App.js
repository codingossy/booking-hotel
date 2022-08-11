import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import List from './pages/List';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/hotel' element={<Hotel /> }/>
        <Route path='/list' element={<List /> }/>

      </Routes>
    </Router>

    
  );
}

export default App;
