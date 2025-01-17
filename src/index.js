import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

{/*const theme = createTheme({
palette: {
  primary: {
    main: "#013e87",
  },
  secondary: {
    main: "#2e74c9",
  }
},
typography: {
  h1: {
    fontSize: "3rem",
    fontWeight: 600,
  },
  h2: {
    fontSize: "1.75rem",
    fontWeight: 600,
  },
  h1: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
},

});*/}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
