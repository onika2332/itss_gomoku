import React from 'react'
import Avatar from '@mui/material/Avatar'


export default function User(props) {
  const { data } = props;

  var winningRate = data.win_game / data.total_game * 100

  // var deleteData = (id) => {
  //   collection(db, 'user').child(id).remove()
  //   console.log("da xoa")
  // }

  return (
    false === data.isAdmin ?
      <div>
        {/* <button id={data.nickname} onClick={()=>deleteData(data.nickname)}>Xoa</button> */}
        {/* Avatar */}
        <Avatar src={data.image} alt="avatar"></Avatar>
        {/* userName (nickname) */}
        <h4>Name: {data.nickname}</h4>
        {/* Total games */}
        <h4>Total: {data.total_game}</h4>
        {/* Win games */}
        <h4>Win: {data.win_game}</h4>
        {/* WinningRate */}
        <h4>WinningRate: {data.total_game === 0 ? 0 : winningRate}%</h4>
        <hr />
      </div>
      : <h6>...</h6>
  )
}
