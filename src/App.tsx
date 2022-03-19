import { LngLat } from 'mapbox-gl';
import React from 'react';
import './App.css';
import Timeline from './components/Timeline';
import { Provider } from 'react-redux';
import { store } from './state/store';
import allLifeEvents from './data/allLifeEvents';

function App() {
  return (
    <Provider store={store}>
      <div className="App"><Timeline allLifeEvents={allLifeEvents} /></div>
    </Provider>
  );
}

export default App;
