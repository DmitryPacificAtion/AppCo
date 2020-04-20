import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const App = () => <div className="hello">Hello World</div>

ReactDOM.render(
    <App />,
  document.getElementById('root') as HTMLElement);