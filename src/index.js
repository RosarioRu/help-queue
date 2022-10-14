import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

//this code creates the root DOM node in which React will render our App component.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/*parent component of ENTIRE app */}
  </React.StrictMode> //This component is optional & we can wrap around our parent component, <App />, to have it perform additional checks for errors in any components nested inside of it.
);

//above code can also be written as follows:
/*
//below searches public/index.html for the element with id = root, which is a div. It saves this as 'container' because it will eventually hold all of the components of our application, and it's the location where our React app will be rendered.

const container = document.getElementById("root");  

//Next, we call ReactDOM.createRoot(container);, passing in our container variable. This creates a root DOM node (inside of the div) for React to render all of its components to.

const root = ReactDOM.createRoot(container);

//Then, we call root.render(), which inserts the React components into the DOM; or, in other words "renders" the React components. When we call root.render() we must pass in a single element. We pass in a React component, nested inside of another React component. This counts as one element:

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/
