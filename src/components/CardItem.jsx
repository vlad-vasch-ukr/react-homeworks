import React from 'react'

function CardItem({item}) {
  return (
    <div className="CardItem">
      <div className="CardItem__preview">
        <img src={item.picture} alt="avatar" draggable="false" className="CardItem__img" />
      </div>
      <div className="CardItem__body">
        <div className="CardItem__field">
          <span className="CardItem__field-title">Name:</span>
          <span className="CardItem__field-value">{item.name}</span>
        </div>
        <div className="CardItem__field">
          <span className="CardItem__field-title">Age:</span>
          <span className="CardItem__field-value">{item.age}</span>
        </div>
        <div className="CardItem__field">
          <span className="CardItem__field-title">Gender:</span>
          <span className="CardItem__field-value">{item.gender}</span>
        </div>
        <div className="CardItem__field">
          <span className="CardItem__field-title">Balance:</span>
          <span className="CardItem__field-value">{item.balance}</span>
        </div>
      </div>
    </div>
  ) 
}

export default CardItem