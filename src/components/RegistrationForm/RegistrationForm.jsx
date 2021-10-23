import { Card, TextField, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import './RegistrationForm.scss';

export default function RegistrationForm({ className }) {
  const rules =  yup.object().shape({
    firstName: yup.string().required('Field required'),
    secondName: yup.string().required('Field required')
  })
  const {handleSubmit, register, formState: {isValid}, reset, getValues} = useForm({
    resolver: yupResolver(rules),
    mode: 'onChange'
  })

  const submitForm = () => {
    console.log(getValues())
    reset()
  }

  return (
    <Card className={['registration-form', ...className].join(' ')}>
      <form noValidate autoComplete='off' className="registration-form__form" onSubmit={ handleSubmit(submitForm) }>
        <Typography variant='p' component='h2' align='center' mb={ 2 }>
          Registration User
        </Typography>
        <TextField
          {...register('firstName')}
          type='text'
          label='First name'
          fullWidth
        />
        <TextField
          {...register('secondName')}
          type='text'
          label='Second name'
          fullWidth
          sx={{ marginTop: '15px' }}
        />
        <Button
          variant="contained"
          type='submit'
          sx={{ margin: '20px auto 0 auto', display: 'block' }}
          disabled={ !isValid }
        >
          Register participant
        </Button>
      </form>
    </Card>
  )
}

RegistrationForm.propTypes = {
  className: PropTypes.array
}

RegistrationForm.defaultProps = {
  className: []
}
