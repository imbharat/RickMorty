import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react/components/App';

ReactDOM.hydrate(
    <App data={initialData}/>,
    document.getElementById('root')
);