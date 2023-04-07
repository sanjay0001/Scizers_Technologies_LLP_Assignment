
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";
import Home from "./components/Home"
import { useState } from 'react';
function App() {
  const [changer,setChanger] = useState(0)
  function change(e){
    setChanger(e)
  }
  return (
    <div className="App">
      <Router>
      <Navbar change={change}/>
      <Routes>
        <Route path='/' element={<Home change={changer} />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
