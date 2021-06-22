import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
#root,
html,
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

html {
  font-family: sans-serif;
  font-size: 12px;
}
`

ReactDOM.render(
  <>
  <Provider store={store}>
    <Global/>
    <App />
  </Provider>
  </>,
  document.getElementById('root')
);
