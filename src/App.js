import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './component/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Dashboard from './component/Dashboard';

function App() {
  return (
      <BrowserRouter>
      <div >
        <h1 className="App-header">Tapioca Cafe</h1>

              <Routes>
                  <Route exact path="/" element={<SignIn />} />
                  <Route path="/home" element={<Home/>} />
                  <Route path="/dashboard" element={<Dashboard/>} />
              </Routes>


      </div>
      </BrowserRouter>
  );
}
export default App;