import React from 'react'
import User from './User'
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from './../../firebase'


export default function UserList() {
    const [users, setUsers] = useState([]);

    const getData = async () => {
		const usersCol = collection(db, 'user');
		const snapshot = await getDocs(usersCol);
		setUsers(
			snapshot.docs.map(doc => ({
				id: doc.id,
				user: doc.data()
			}))
		)
	}

    useEffect(() => {
		// this is where the code runs
		getData();
	}, []);

    return (
        <div>
            <h1>User list</h1>
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
        </div>
    )
}
