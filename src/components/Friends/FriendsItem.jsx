import React from 'react'

const FriendsItem = ({item}) => {
    console.log(item)
  return (
    <>
     <div>{item.title}</div>
     <img src={item.imageUrl} alt='logo'/>
    </>
   
  )
}

export default FriendsItem