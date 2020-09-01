// React is a view library (robot that does the painting)
import React from 'react';
// ReactDOM means website...could be React Native (mobile apps)
import ReactDOM from 'react-dom';
// ./ means it's in the same folder
import './index.css';
//Must be capitalized for syntax
import Card from './Card.js';
// Service workers are new feature that allow apps to run faster and work offline
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// Have to destructure because you're not exporting default
import { robots } from './robots';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card id={ robots[0].id } name={ robots[0].name }email={ robots[0].email }/>
      <Card id={ robots[1].id } name={ robots[1].name } email={ robots[1].email }/>
      <Card id={ robots[2].id } name={robots[2].name } email={ robots[2].email }/>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
