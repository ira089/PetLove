import React from 'react'

const NewsItem = ({item}) => {
  console.log(item)
  return (
    <li key={item._id}>
      {item.title}
    </li>
  )
}

export default NewsItem