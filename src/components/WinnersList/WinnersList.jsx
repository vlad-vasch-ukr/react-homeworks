import { List, ListItem, ListItemText, Box, Typography } from "@mui/material";
import { useGameStore } from '../../context';

export default function WinnersList() {
  const [state] = useGameStore();
  
  return (
    <Box sx={{ position: 'absolute', right: '-200px', top: '50px', color: '#fff' }}>
      <Typography component='h3' variant='p' sx={{ textAlign: 'center' }}>
        Winners:
      </Typography>
      <List>
        {
          state.winnersList.map(({ winner, date }, index) => {
            return (
              <ListItem key={ index }>
                <ListItemText primary={ date } sx={{ marginRight: '15px' }} />
                <ListItemText primary={ winner } />
              </ListItem>
            )
          })
        }
      </List>
    </Box>
  )
}
