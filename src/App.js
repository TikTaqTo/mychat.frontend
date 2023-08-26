import React from 'react';
import './styles/index.scss';

import { Auth, Home } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route exact path="/signup" Component={Auth} />
        <Route exact path="/signin" Component={Auth} />
        <Route exact path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
