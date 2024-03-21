import React from 'react';

import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Signin from './pages/Signin';
import Signup from './pages/Signup';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
  );
};

export default App;
