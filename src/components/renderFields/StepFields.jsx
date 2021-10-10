import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useFormStore } from '../../context/Context';
import FormActions from '../formActions/FormActions';
import { nextStep, updateState } from '../../reducer/FormReducer';
import './main.scss';

export default function StepFields({ rules, fieldsDescription }) {
  const [state, dispatch] = useFormStore()
  const {register, handleSubmit, getValues, formState: {errors}} = useForm({
    mode: 'onChange',
    resolver: yupResolver(rules)
  });
  const passwordValicadion = {
    required: 'Повторите пароль!',
    validate: {
      matchesPreviousPassword: (value) => {
        const { password } = getValues();
        return password === value || 'Пароли не совпадают!';
      }
    }
  }

  return (
    <form onSubmit={ handleSubmit( () => dispatch(nextStep()) ) }>
      {
        fieldsDescription.map(field => {
          return (
            <div className="Field" key={ field.name }>
              <TextField
                {...register(field.name, field.name === 'confirmPassword' ? passwordValicadion : '')}
                onInput={ (e) => {dispatch(updateState({ name: field.name, value: e.target.value }))} }
                label={ field.label }
                type={ field.type }
                defaultValue={ state.form[field.name] }
                fullWidth
                error={!!errors[field.name]}
              />
              { errors[field.name] && <p className='Field__error'>{ errors[field.name].message }</p> }
            </div>
          )
        })
      }
      <FormActions />
    </form>
  )
}