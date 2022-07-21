import React from 'react'
import Avatar from '@mui/material/Avatar'
import { db } from './../../../firebase'
import { useState, useEffect } from 'react'
// import { getAuth } from 'firebase/auth';

import { doc, getDoc } from "firebase/firestore";

export default function UserInfo() {
	const [user, setUser] = useState(null);

  var userId = localStorage.getItem("userId");
  console.log(userId)

  const getData = () => {
    const docRef = doc(db, "user", userId);
    getDoc(docRef).then(res => {
      console.log(res.data)
      setUser({
        id: res.data().nickname,
        ...res.data()
      })
    });

    // console.log(docSnap.data);

    // setUser(
    //   {
    //     id: docSnap.data.nickname,
    //     user: doc.data
    //   }
    // )
  }

  useEffect(() => {
		// this is where the code runs
		getData();

    return () => console.log(user);
	}, []);

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <div>
        {/* Avatar */}
        
            {
              user && (
                <div>
                  <Avatar src={user.image} alt="avatar"></Avatar>
                  <h1>Name: {user.nickname}</h1>
                </div>
              )
            }
        
        
        
    </div>    
  )

}
