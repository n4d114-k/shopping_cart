import React from 'react';
import { Provider } from 'react-redux';

import store from './store.js';
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <br />
      <Home />
  </Provider>
  );
}

export default App;
