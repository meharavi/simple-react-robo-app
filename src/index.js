import React from 'react';
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App.js';
import 'tachyons';

// const root = createRoot(container);
// root.render(element);

ReactDOM.render(
  <App />,
  document.getElementById('root'));

// createRoot(document.getElementById('root')).render(<App />);