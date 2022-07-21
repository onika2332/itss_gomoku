import React from 'react'
import Avatar from '@mui/material/Avatar'
import { db } from './../../../firebase'
import { useState, useEffect } from 'react'
// import { getAuth } from 'firebase/auth';

import { doc, getDoc } from "firebase/firestore";

export default function UserInfo() {
  const [user, setUser] = useState(null);
  var userId = localStorage.getItem("userId");

  const getData = () => {
    const docRef = doc(db, "user", userId);
    getDoc(docRef).then(res => {
      setUser({
        id: res.data().nickname,
        ...res.data()
      })
    });
  }

  useEffect(() => {
    // this is where the code runs
    getData();
  }, []);

  return (
    <div>
      {
        user && (
          <div>
            <Avatar src={user.image} alt="avatar"></Avatar>
            <h1>{user.nickname}</h1>
          </div>
        )
      }
    </div>
  )
}
