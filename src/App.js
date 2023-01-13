import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Race from './Views/Races/[id]/Race';
import Sidebar from './Components/Sidebar';
import Signup from './Views/Auth/Signup';
import Signin from './Views/Auth/Signin';
import Account from './Views/Account';
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>F1 prono</title>
        <style>{'body { background-color: #1d1d1d;color: #fff;margin-top: 80px }'}</style>
      </Helmet>
      <Sidebar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path=':circuitId' element={<Race />}/>
          <Route path='inscription' element={<Signup />}/>
          <Route path='connexion' element={<Signin />}/>
          <Route path='mon-compte' element={<Account />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
