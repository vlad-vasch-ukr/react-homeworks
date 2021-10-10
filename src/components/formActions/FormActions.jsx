import { Button } from '@mui/material';
import { useFormStore } from '../../context/Context';
import { prevStep } from '../../reducer/FormReducer';
import './main.scss';

export default function FormActions() {
  const [state, dispatch] = useFormStore();

  return (
    <div className="FormActions">
      { state.step > 1 && <Button
                            type='button'
                            variant='outlined'
                            style={{ padding: '10px 40px', marginRight: 'auto' }}
                            onClick={ () => dispatch(prevStep()) }
                          >
                            Previous
                          </Button>
      }
      <Button
        type='submit'
        variant='outlined'
        style={{ padding: '10px 40px' }}
        //onClick={ () => dispatch(nextStep()) }
      >
        { state.step === 4 ? 'Submit' : 'Next'}
      </Button>
    </div>
  )
}
