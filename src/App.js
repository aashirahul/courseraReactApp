
import './App.css';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import Sidebar from './components/Sidebar';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
 return( <div>
  <Header name="Anna" color="pink"/>
  <nav>
    <Link to="/" className="nav-item">InputComponent</Link>
    <Link to="/sidebar" className="nav-item"> Sidebar</Link>
  </nav>
  <div></div>
  <Routes>
    <Route path ="/" element = {<InputComponent />} />  
    <Route path ="/sidebar" element = { <Sidebar />} />  
  </Routes>
 </div>
 

 ) 
}

export default App;
