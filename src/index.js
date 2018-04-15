import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div>Hello from the other side</div> 
}

ReactDOM.render(<App />, document.querySelector('.container'));