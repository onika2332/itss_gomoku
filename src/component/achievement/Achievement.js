import React from 'react'
import Avatar from '@mui/material/Avatar'
import { db } from './../../firebase'
import { useState, useEffect } from 'react'
// import { getAuth } from 'firebase/auth';

import { doc, getDoc } from "firebase/firestore";

export default function Achievement() {
	const [user, setUser] = useState(null);
  const [winningRate, setWinningRate] = useState(0);

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
    if (user)
    {
      console.log(user);

      user.total_game==0? setWinningRate(0) : setWinningRate(user.win_game/user.total_game*100);
    }

  }, [user])


  return (
    <div>
        {/* Avatar */}
        
            {
              user && (
                <div>
                  <Avatar src={user.image} alt="avatar"></Avatar>
                  <h1>名前: {user.nickname}</h1>
                  <h1>ゲーム数: {user.total_game}</h1>
                  <h1>勝ち数: {user.win_game}</h1>
                  <h1>勝ち率: {winningRate}%</h1>
                </div>
              )
            }
        
        
        
    </div>    
  )

}
