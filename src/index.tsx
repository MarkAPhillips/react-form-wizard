import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Routes } from './Routes';
import { Layout } from './components';
import rootReducer from './reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer, composeEnhancers(applyMiddleware(thunk)),
) as any;

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </PersistGate>
  </Provider>
);

const rootElement = document.getElementById('root');
render(<App />, rootElement);
