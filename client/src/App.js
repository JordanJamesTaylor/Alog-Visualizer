import Home from './Components/Home'
import Test from './Components/Test'
import './App.css';
import React from 'react';
import {Route, Routes,} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Routes>
    </div>
  );
}
export default App;



