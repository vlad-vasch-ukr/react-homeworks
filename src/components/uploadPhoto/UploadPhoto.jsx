import { TextField, ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";
import { nextStep, updateState } from "../../reducer/FormReducer";
import { useFormStore } from '../../context/Context';
import FormActions from "../formActions/FormActions";
import './main.scss';

export default function UploadPhoto() {
  const [currentPath, setCurrentPath] = useState('');
  const [state, dispatch] = useFormStore();
  const [error, setError] = useState('');
  const avatarList = [];

  for (let i = 1; i < 9; i++) {
    avatarList.push(`/img/default-avatar-${i}.png`)
  }

  const chooseAvatar = (path) => {
    setCurrentPath(path)
    dispatch(updateState({name: 'avatar', value: path}))
  }

  const loadAvatar = (event) => {
    const reader = new FileReader()
    const input = event.target.files
    const file = input[0]
    if (input.length > 1) {
      setError('Можно загрузить только одно фото!');
      return
    }
    reader.readAsDataURL(file)
    reader.onload = () => {
      setCurrentPath(reader.result)
      setError('')
      dispatch(updateState({name: 'avatar', value: reader.result}))
    };
    reader.onerror = ()=> {
      setError(reader.error);
    };
  }

  const submit = (e) => {
    e.preventDefault()
    if (currentPath) {
      dispatch(nextStep())
      setError('')
    } else {
      setError('Выберите или загрузите аватар!')
    }
  }

  return (
    <form className="UploadPhoto" onSubmit={ submit }>
      <TextField
        type='file'
        fullWidth
        onChange={ loadAvatar }
      />
      <ImageList
        sx={{ width: 420, height: 240 }}
        cols={ 4 } rowHeight={ 75 }
        style={{ margin: '20px auto' }}
      >
        {
          avatarList.map(path => {
            return (
              <ImageListItem key={ path }>
                <img
                  src={ path } 
                  alt={ 'user avatar' }
                  loading="lazy"
                  className={["UploadPhoto__avatar", path === currentPath ? 'active' : ''].join(' ')}
                  onClick={ chooseAvatar.bind(null, path) }
                />
              </ImageListItem>
            )
          })
        }
      </ImageList>
      <p className={["UploadPhoto__error", error ? 'active' : ''].join(' ')}>{ error }</p>
      <FormActions />
    </form>
  )
}