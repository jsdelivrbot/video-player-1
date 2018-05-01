import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//imported components 
import SearchBar from './components/search-bar';
//import api key 
import{API_KEY, HOST, PORT} from './key';

const URL = `http:${HOST}:${PORT}/user?${API_KEY}`;

//Parent component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: [] }; 

        YTSearch({key: API_KEY, searchTerm: 'cats'}, (videos) => {
            this.setState({videos});
        });

    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
