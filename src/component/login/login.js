import React, { useContext, useState } from 'react'
import './login.css'
import { auth } from "../../firebase"
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
                console.log(user);
                navigate('/home');
            })
            .catch((err) => {
                setError(true);
            });
    }
    return (
        <div className='login'>
            <div className='logo'>五目</div>
            <div className='login-form'>
                <form onSubmit={handleLogin}>
                    <input
                        type='email'
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type='password'
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type='submit'>LOGIN</button>
                </form>

                {error && <span>Wrong email or password</span>}

                <span
                    className='gg-signin'
                >
                    Login with Google Account
                </span>

                <span
                    className='sign-up'
                    onClick={() => navigate('/signup')}
                >
                    Haven't an account? Signup
                </span>
            </div>
        </div>
    )
}

export default Login