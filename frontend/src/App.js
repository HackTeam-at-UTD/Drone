import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Items from './Items_list.js';
import Home from './Home.js';
// import NotFound from '../pages/NotFound'


const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/items" element={<Items/>}/>
        </Routes>
    </Router>
  );
}

export default App;