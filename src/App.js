import Main from './containers/Main';
import { Provider } from "react-redux";
import { store } from './store';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
