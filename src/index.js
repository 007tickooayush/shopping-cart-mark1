import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var trainings = [
  {name:'Web development',price:300},
  {name:'UI UX development',price:200},
  {name:'Web Design',price:250},
  {name:'AWS Training',price:400},
];

ReactDOM.render(
  <App trainings={trainings}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
