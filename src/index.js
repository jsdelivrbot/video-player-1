import React from 'react';
import ReactDOM from 'react-dom';

//imported components 
import SearchBar from './components/search-bar';

import{API_KEY, HOST, PORT} from './key';

const URL = `http:${HOST}:${PORT}/user?${API_KEY}`;

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.container'));
