import React, { useContext, useState } from 'react'
import './login.css'
import { auth, getData } from "../../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

function Login() {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                dispatch({
                    type: "LOGIN",
                    payload: user
                });

                localStorage.setItem("userId", user.uid);
                getData(user.uid)
                    .then(data => {
                        localStorage.setItem("isAdmin", data.isAdmin);
                        if (!data.isAdmin) {
                            navigate('/home');
                        }
                        else {
                            navigate('/user-list');
                        }
                    })
                    .catch(
                        err => console.log(err)
                    )
            }
            )
            .catch((err) => {
                setError(true);
                console.log(err);
            }
            );
    }
    return (
        <div className='login'>
            <div className='logo'>五目</div>
            <div className='login-form'>
                <form onSubmit={handleLogin}>
                    <input
                        type='email'
                        placeholder='メールアドレス'
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type='password'
                        placeholder='パスワード'
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type='submit'>ログイン</button>
                </form>

                {error && <span>メールアドレスまたはパスワードが正しくありません。</span>}

                <span
                    className='gg-signin'
                >
                    グーグルアカウントでログイン
                </span>
                <hr />
                <span
                    className='sign-up'
                    onClick={() => navigate('/signup')}
                >
                    登録
                </span>
            </div>
        </div>
    )
}

export default Login