// React is a view library (robot that does the painting)
import React from 'react';
// ReactDOM means website...could be React Native (mobile apps)
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
// ./ means it's in the same folder
import './index.css';
import App from './containers/App'
// Service workers are new feature that allow apps to run faster and work offline
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {searchRobots, requestRobots} from './reducers';
import { createLogger } from 'redux-logger';

//SMART COMPONENTS ARE CALLED CONTAINERS
//logger is middleware that logs all actions in console (good for development)
const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  //Provider will pass down store to all the components
    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
