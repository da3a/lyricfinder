
//1. https://www.youtube.com/watch?v=NDEt0KdDbhk
//2. https://www.youtube.com/watch?v=jiM0wqQZMWg
//3. https://www.youtube.com/watch?v=ktPocNL0qGg
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
