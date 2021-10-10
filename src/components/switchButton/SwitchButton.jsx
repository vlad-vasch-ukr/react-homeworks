import { useFormStore } from '../../context/Context';
import { switchTheme } from '../../reducer/FormReducer';
import './main.scss';

export default function SwitchButton() {
  const [state, dispatch] = useFormStore()
  
  return (
    <label className="switch">
      <input
        type="checkbox"
        value={ state.darkTheme }
        onChange={ () => dispatch(switchTheme()) }
      />
      <span className="slider round"></span>
    </label>
  )
}
