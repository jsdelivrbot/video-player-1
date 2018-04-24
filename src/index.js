import React from 'react';
import ReactDOM from 'react-dom';

import{API_KEY, HOST, PORT} from './key';

const URL = `http:${HOST}:${PORT}/user?${API_KEY}`;

const App = () => {
    return <div>Hello from the other side</div> 
};

ReactDOM.render(<App />, document.querySelector('.container'));
