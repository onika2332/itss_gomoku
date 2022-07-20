import React from 'react'
import User from './User'
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from './../../firebase'


export default function UserList() {
    const [users, setUsers] = useState([]);
    const [text, setText] = useState("");

    const getData = async (text) => {
        const usersCol = collection(db, 'user');
        const snapshot = await getDocs(usersCol);
        setUsers(
            snapshot.docs
                .map(doc => ({
                    id: doc.id,
                    user: doc.data()
                })).filter(
                    data => data.user.isAdmin === false
                ).filter(
                    data => {
                        if (text === "") return true
                        else return data.id.includes(text)
                    }
                )
        )
    }

    useEffect(() => {
        // this is where the code runs
        getData("")
    }, []);

    const handleSearch = (e) => {
        setText(e.target.value);
        getData(text);
        // Cần state ban đầu là toàn bộ data....!!!!!!!!!!!
    }

    return (
        <div>
            <h2>User list</h2>
            <input
                type="text"
                placeholder='Search user...'
                onChange={handleSearch}
            />
            {
                users.length > 0 ?
                    <div className="User__list">
                        {
                            users.map(({ id, user }) => (
                                <User
                                    key={id}
                                    data={user}
                                />
                            ))
                        }
                    </div>
                    : <h4>NO USER</h4>
            }
        </div>
    )
}
