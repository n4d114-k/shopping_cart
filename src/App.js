import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route }  from 'react-router-dom';

import store from './store.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <br />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/cart' component={Cart} />
      </BrowserRouter>
  </Provider>
  );
}

export default App;
