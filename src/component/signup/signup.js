import React from 'react'
import './signup.css'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

function Signup() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Signup new account successfully");
                navigate('/');
            })
            .catch((err) => {
                setError(true);
            });
    }
    return (
        <div className='signup'>
            <div className='logo'>五目</div>
            <div className='signup-form'>
                <form onSubmit={handleSignup}>
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

                    <button type='submit'>SIGNUP</button>
                </form>

                {error && <span>Email is registed. Please type another</span>}

                <span
                    className='log-in'
                    onClick={() => navigate('/')}
                >
                    Have an account? Login
                </span>
            </div>
        </div>
    )
}

export default Signup