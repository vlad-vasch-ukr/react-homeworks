import { useFormStore } from '../../context/Context';
import { Card } from '@mui/material';
import * as Yup from 'yup';
import './main.scss';
import StepFields from '../renderFields/StepFields';
import UploadPhoto from '../uploadPhoto/UploadPhoto';
import ResultForm from '../ResultForm/ResultForm';
import SwitchButton from '../switchButton/SwitchButton';

export default function FormCard() {
  const [state] = useFormStore()
  const stepFields = {
    1: {
      fields: [
        { label: 'Имя', type: 'text', name: 'firstName' },
        { label: 'Фамилия', type: 'text', name: 'lastName' },
        { label: 'Email', type: 'email', name: 'email' }
      ],
      rules: Yup.object().shape({
        firstName: Yup.string().required('Поле обязательно'),
        lastName: Yup.string().required('Поле обязательно'),
        email: Yup.string().required('Поле обязательно').email('Электронная почта должна быть действительной')
      }).required()
    },
    2: {
      fields: [
        { label: 'Город', type: 'text', name: 'city' },
        { label: 'Улица', type: 'text', name: 'street' },
        { label: 'Дом', type: 'text', name: 'house' }
      ],
      rules: Yup.object().shape({
        city: Yup.string().required('Поле обязательно'),
        street: Yup.string().required('Поле обязательно'),
        house: Yup.string().required('Поле обязательно')
      })
    },
    4: {
      fields: [
        { label: 'Пароль', type: 'password', name: 'password' },
        { label: 'Подтвердите пароль', type: 'password', name: 'confirmPassword' }
      ],
      rules: Yup.object().shape({
        password: Yup.string().required('Поле обязательно'),
        confirmPassword: Yup.string().required('Поле обязательно').oneOf([Yup.ref('password'), null], 'Пароли не совпадают!'),
      })
    }
  }

  return (
    <div className={["wrapper", state.darkTheme ? 'dark-theme' : ''].join(' ')}>
      <Card style={{maxWidth: '500px', width: '100%', border: '1px solid #1976d2', padding: '20px'}}>
        <h1 className="main-title">
          { state.step < 5 ? `Шаг: ${state.step}` : 'Спасибо за регистрацию' }
        </h1>
        { state.step >= 1 && state.step < 3 || state.step === 4 ?
          <StepFields rules={ stepFields[state.step].rules } fieldsDescription={ stepFields[state.step].fields } /> : ''
        }
        { state.step === 3 && <UploadPhoto /> }
        { state.step === 5 && <ResultForm /> }
      </Card>
      <SwitchButton />
    </div>
  )
}
