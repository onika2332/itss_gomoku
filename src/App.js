import { useContext } from 'react';
import './App.css';
import { AuthContext } from './context/auth/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './component/signup/signup';
import Login from './component/login/login';
import Home from './component/home/Home';
import ErrorPage from './component/ErrorPage';

function App() {
  const { curUser } = useContext(AuthContext);

  return (
    <div className='app-container'>
      <Routes>
        <Route path='*' element={<ErrorPage />} />

        <Route path='signup' element={<Signup />} />

        <Route path='/' element={<Login />} />
        {
          curUser ?
            <Route path='home' element={<Home />} /> :
            <Route path='/' element={<Login />} />
        }
      </Routes>
    </div>

  );
}

export default App;
