import './App.scss';
import FormCard from './components/form/FormCard';
import { FormProvider } from './context/Context';
import { formReducer, initialState } from './reducer/FormReducer';

function App() {
  return (
    <div className="App">
      <FormProvider formReducer={ formReducer } initialState={ initialState }>
        <FormCard />
      </FormProvider>
    </div>
  );
}

export default App;
