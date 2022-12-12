import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Race from './Views/Races/[id]/Race';
import Sidebar from './Components/Sidebar';
import Signup from './Views/Auth/Signup';
import Signin from './Views/Auth/Signin';
import Account from './Views/Account';

function App() {

  React.useEffect(() => {
    document.title = 'F1 prono';
  })

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path=':season/:id' element={<Race />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='signin' element={<Signin />}/>
          <Route path='mon-compte' element={<Account />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
