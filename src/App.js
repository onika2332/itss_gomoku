import { useContext } from 'react';
import './App.css';
import { AuthContext } from './context/auth/AuthContext';
import { Routes, Route } from "react-router-dom";
import Signup from './component/signup/signup';
import Login from './component/login/login';
import Home from './component/home/Home';
import ErrorPage from './component/ErrorPage';
import Board from './component/game/board/Board';
<<<<<<< HEAD
import { BoardContextProvider } from './context/gameboard/BoardContext';
import Instruction from './component/instruction/Instruction';
import Achievement from './component/achievement/Achievement';
import UserList from './component/user/UserList';
=======
import { Provider } from 'react-redux'
import { store } from './store/store';
>>>>>>> add_realtime_db

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

        <Route path='/gameplay' element={
          <Provider store={store}>
            <Board />
          </Provider>
        } />

        <Route path='/instruction' element={
          <Instruction />
        } />

        <Route path='/user-list' element={
          <UserList />
        } />
        
      </Routes>
    </div>

  );
}

export default App;
