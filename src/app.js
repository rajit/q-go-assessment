import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import ItemCreator from './components/ItemCreator';
import ItemFilters from './components/ItemFilters';
import ItemsList from './components/ItemsList';
import './app.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <div>
            <ItemFilters />
            <ItemCreator />
            <ItemsList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
