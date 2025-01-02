import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// filepath: /Users/armandosanchez/HelloWorld/my-mixed-project/frontend/src/App.js
import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <h1>Hello World! GitHub Copilot is my friend.</h1>
            <p>Blah blah blah, something something.</p>
        </div>
    );
};

export default App;