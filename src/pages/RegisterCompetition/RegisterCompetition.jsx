import { Card, Box, Typography, TextField, Button } from "@mui/material";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import getUid from "get-uid";
import { addNewCompetition } from "../../store/actions";
import { useHistory } from "react-router";

export default function RegisterCompetition() {
  const history = useHistory();
  const dispatch = useDispatch();
  const rules =  yup.object().shape({
    name: yup.string().required('Field required')
  })
  const {handleSubmit, register, formState: {isValid}, reset, getValues} = useForm({
    resolver: yupResolver(rules),
    mode: 'onChange'
  })

  const submitForm = () => {
    const newContest = getValues();
    newContest.id = getUid();
    newContest.status = 'active';
    dispatch(addNewCompetition(newContest));
    history.push('/')
    reset();
  }

  return (
    <Box minHeight='100vh' display='flex' alignItems='center' justifyContent='center'>
      <Card sx={{ border: '1px solid #000', padding: '40px', maxWidth: '500px', width: '100%' }}>
        <form noValidate autoComplete='off' className="registration-form__form" onSubmit={ handleSubmit(submitForm) }>
          <Typography variant='p' component='h2' align='center' mb={ 2 }>
            Create Contest
          </Typography>
          <TextField
            {...register('name')}
            type='text'
            label='Contest name'
            fullWidth
          />
          <Button
            variant="contained"
            type='submit'
            sx={{ margin: '20px auto 0 auto', display: 'block' }}
            disabled={ !isValid }
          >
            Create
          </Button>
        </form>
      </Card>
    </Box>
  )
}