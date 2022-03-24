import './App.css';
import { Provider } from 'react-redux';
import { store } from './state/store';
import MainBody from './components/Layout/MainBody';

function App() {
  return (
    <Provider store={store}>
      <div className="App"><MainBody /></div>
    </Provider>
  );
}

export default App;
