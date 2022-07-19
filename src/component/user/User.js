import React from 'react'
import Avatar from '@mui/material/Avatar'
import { db } from './../../firebase'
import { collection } from 'firebase/firestore';


export default function User( props ) {
  const { data }  = props;

  var winningRate = data.win_game/data.total_game*100

  // var deleteData = (id) => {
  //   collection(db, 'user').child(id).remove()
  //   console.log("da xoa")
  // }

  return (
    <div>
        {/* <button id={data.nickname} onClick={()=>deleteData(data.nickname)}>Xoa</button> */}
        {/* Avatar */}
        <Avatar src={data.image} alt="avatar"></Avatar>
        {/* userName (nickname) */}
        <h1>Name: {data.nickname}</h1>
        {/* Total games */}
        <h1>Total: {data.total_game}</h1>
        {/* Win games */}
        <h1>Win: {data.win_game}</h1>
        {/* WinningRate */}
        <h1>WinningRate: {data.total_game===0?0:winningRate}%</h1>
        <hr />
    </div>
    
  )
}
