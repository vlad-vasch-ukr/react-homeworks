import { Card, Typography, Button } from "@mui/material";

export default function Winner({ usersLength, winner, handler }) {
  return (
    <Card sx={{ border: '1px solid #000', marginTop: '30px', padding: '20px' }}>
      <Typography align='center' component='p' variant='h5' mb={ 2 }>
        { !winner ? `Total participants: ${usersLength}` : 'The winner:'}
      </Typography>
        { winner && <div>
          <Typography component='p' variant='p' align='center'>
            ID: { winner.id }
          </Typography>
          <Typography component='p' variant='p' mt={ 2 } align='center'>
            Name: { winner.firstName }
          </Typography>
          <Typography component='p' variant='p' mt={ 2 } align='center'>
            Time: { winner.time }
          </Typography>
        </div> }
        {
          !winner && <Button
                       variant='contained'
                       sx={{ display: 'block', margin: '30px auto 0 auto' }}
                       onClick={ handler }
                      >
                        Show winner
                      </Button>
        }
    </Card>
  )
}