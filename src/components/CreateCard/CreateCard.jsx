import React, {useState} from 'react';
import './main.scss';
import uniqId from 'uniqid';

function CreateCard({ createUserCard }) {
  const fields = [
    { type: 'text', name: 'name' },
    { type: 'number', name: 'age' },
    { type: 'number', name: 'balance' }
  ]

  const [user, setUser] = useState({
		name: '',
		age: '',
		gender: '',
		balance: '',
	})

  function valid() {
    if (user.name && user.age && user.gender && user.balance) {
      createUserCard({
        ...user,
        picture: 'http://placehold.it/32x32',
        _id: uniqId()
      })
      setUser({
        name: '',
		    age: '',
		    gender: '',
		    balance: '',
      })
    } else console.log('Wrong!!!')
  }

  return (
    <div className="CreateCard">
      <p className="CreateCard__title">Create user</p>
      {
        fields.map((field, index) => {
          return (
            <div className="CreateCard__field" key={ index }>
              <span className="CreateCard__title">{ field.name }:</span>
              <input
                type={ field.type }
                value={ user[field.name] }
                onChange={ (e)=> setUser({...user, [field.name]: e.target.value}) }
                className="CreateCard__input"
              />
            </div>
          )
        })
      }
      <div className="CreateCard__field">
        <span className="CreateCard__title">Gender:</span>
        <select value={ user.gender } className="CreateCard__select" onChange={ (e)=> setUser({...user, gender: e.target.value}) }>
          <option value="" disabled >Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button type="button" onClick={ valid } className="CreateCard__btn">Create</button>
    </div>
  )
}

export default CreateCard
