import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom';
import Pnf from './components/Pnf';

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/"  element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Pnf/>}/>
      </Routes>
    </BrowserRouter>
  </>;
};

export default App;
