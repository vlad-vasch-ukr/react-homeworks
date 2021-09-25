import { useContext } from 'react';
import Context from '../../helpers/Context';
import './main.scss';

function CSelect({ options, value }) {
  //methods
  const { sortUsersByAge } = useContext(Context)

  return (
    <select className="CSelect" value={ value } onChange={ (e) => sortUsersByAge(e.target.value) }>
      {
        options.map(option => {
          return <option key={ option.name } value={ option.value }>{ option.name }</option>
        })
      }
    </select>
  )
}

export default CSelect