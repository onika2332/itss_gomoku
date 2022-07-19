import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import './Home.css'
import Account from './popup/account/Account';

function Home() {
    const navigate = useNavigate();

    const handleSignout = (e) => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem("userId");
                localStorage.removeItem("IsAdmin");
                navigate('/');
            })
            .catch((err) => { });
    }
    return (
        <div className='home-page'>
            <h3>Home</h3>

            <button onClick={() => navigate('/gameplay')}>Play</button>
            <button onClick={() => navigate('/instruction')}>Read instruction</button>
            <button onClick={() => navigate('/achievement')}>Achievement</button>
            {
                localStorage.getItem("isAdmin") === true
                && <button onClick={() => navigate('/user-list')}>Users List</button>
            }
            <button>Settings</button>
            <Account />
            <button onClick={handleSignout}>SIGNOUT</button>

        </div>
    )
}

export default Home