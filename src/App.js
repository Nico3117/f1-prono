import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Race from './Views/Races/[id]/Race';

function App() {

  React.useEffect(() => {
    document.title = 'F1 prono';
  })

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path=':season/:id' element={<Race />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
