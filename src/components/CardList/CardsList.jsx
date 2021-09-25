import React from 'react';
import CardItem from '../CardItem/CardItem';
import './main.scss';

function CardList({ users, findCurrentUser }) {
  //methods
  const getUserId = e => {
    const modal = e.target.closest('.CardItem')
    if (modal) {
      const index = modal.dataset.id
      findCurrentUser(index)
    }
  } 
  return (
    <div className="CardsList" onClick={getUserId}>
      {
        users.map((item, index) => <CardItem item={item} key={index} />)
      }
    </div>
  )
}

export default CardList