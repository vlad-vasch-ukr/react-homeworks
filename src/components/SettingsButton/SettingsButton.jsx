import { IconButton } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './SettingsButton.scss';

export default function SettingsButton({ handleOpen, disabled }) {
  return (
    <IconButton
      className='settings-button'
      disabled={ disabled }
      variant="contained"
      size="large"
      onClick={ handleOpen }
    >
      <SettingsOutlinedIcon />
    </IconButton>
  )
}