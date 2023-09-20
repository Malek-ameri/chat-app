import React from 'react';

import {Routes,Route} from 'react-router-dom';

import Chat from './pages/Chat';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Chat />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
