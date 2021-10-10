import { useFormStore } from '../../context/Context';
import './main.scss';

export default function ResultForm() {
  const [state] = useFormStore();
  const fields = {
    'Имя': 'firstName',
    'Фамилия': 'lastName',
    'Email': 'email',
    'Город': 'city',
    'Улица': 'street',
    'Дом': 'house',
  }

  return (
    <div className="ResultForm">
      <img src={ state.form.avatar } alt="user avatar" className="ResultForm__avatar" />
      <p className="ResultForm__subtitle">Контактная информация</p>
      {
        Object.entries(fields).map( item => {
          return (
            <div className="ResultForm__user-info" key={ item[0] }>
              <span>{ item[0] }:</span>
              <span>{ state.form[item[1]] }</span>
            </div>
          )
        })
      }
    </div>
  )
}