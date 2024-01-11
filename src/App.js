import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Error from './Components/Error';

function App() {
  return (
    <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
    </>
  );
}

export default App;
