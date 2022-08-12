import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import List from './pages/List';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/hotel' element={<Hotel /> }/>
        <Route path='/list' element={<List /> }/>
        <Route path='/login' element={<Login /> }/>
        <Route path='/register' element={<Register /> }/>

      </Routes>
    </Router>

    
  );
}

export default App;
