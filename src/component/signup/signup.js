import React from 'react'
import './signup.css'
import { auth, db } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"

function Signup() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                handleAddData(user.uid);
                alert("Signup new account successfully");
                navigate('/');
            })
            .catch((err) => {
                setError(true);
            });
    }

    const handleAddData = async (id) => {
        try {
            await setDoc(doc(db, "user", id), {
                nickname: nickname !== "" ? nickname : "NO NAME",
                win_game: 0,
                total_game: 0,
                image: "",
                isAdmin: false
            })
        } catch (err) {
            console.log(err);
        }
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

                    <input
                        type='nickname'
                        placeholder='Type nickname you want'
                        onChange={e => setNickname(e.target.value)}
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