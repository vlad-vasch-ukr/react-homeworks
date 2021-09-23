import React from 'react'
import CardItem from './CardItem'

function CardList({users}) {
  return (
    <div className="CardsList">
      {
        users.map((item, index) => <CardItem item={item} key={index} />)
      }
    </div>
  )
}

export default CardList