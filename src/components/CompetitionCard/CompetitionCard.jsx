import { Card, Typography, Button } from "@mui/material";
import { useHistory } from "react-router";
import PropTypes from 'prop-types';

export default function CompetitionCard({ id, name, status, winner }) {
  const history = useHistory();
  const goToCompetition = () => {
    history.push(`/competition/${id}`);
  }

  return (
    <Card sx={{ padding: '15px', border: '1px solid #000', minWidth: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <Typography component='p'>
          ID: { id }
        </Typography>
        <Typography component='p' mt={ 1 }>
          Name: { name }
        </Typography>
        <Typography component='p' mt={ 1 }>
          Status: { status }
        </Typography>
        {
          winner && <Typography component='p' mt={ 1 }>
                      Winner: { winner.name }
                    </Typography>
        }
      </div>
      <Button
        variant='outlined'
        sx={{ display: 'block', margin: '20px auto 0 auto' }}
        onClick={ goToCompetition }
      >
        Show
      </Button>
    </Card>
  )
}

CompetitionCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

CompetitionCard.defaultProps = {
  id: 0,
  name: '',
  status: ''
}
