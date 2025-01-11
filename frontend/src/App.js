import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Select from './pages/select/select';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;