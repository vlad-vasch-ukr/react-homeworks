import React from 'react';
import './main.scss';

function CardItem({item}) {
  const fields = ['name', 'age', 'gender', 'balance']
  return (
    <div className="CardItem">
      <div className="CardItem__preview">
        <img src={item.picture} alt="avatar" draggable="false" className="CardItem__img" />
      </div>
      <div className="CardItem__body">
        {
          fields.map((field, index) => {
            return (
              <div className="CardItem__field" key={index}>
                <span className="CardItem__field-title">{field}:</span>
                <span className="CardItem__field-value">{item[field]}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  ) 
}

export default CardItem