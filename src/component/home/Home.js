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
            <h3>ホームページ</h3>

            <button onClick={() => navigate('/gameplay')}>プレー</button>
            <button onClick={() => navigate('/instruction')}>案内</button>
            <button onClick={() => navigate('/achievement')}>成績</button>
            {
                localStorage.getItem("isAdmin") === true
                && <button onClick={() => navigate('/user-list')}>ユーザ一覧</button>
            }
            <button>設定</button>
            <Account />
            <button onClick={handleSignout}>ログアウト</button>

        </div>
    )
}

export default Home