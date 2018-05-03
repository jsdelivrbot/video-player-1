import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//imported components 
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoInfo from './components/video-infomation';
//import api key 
import{API_KEY, HOST, PORT} from './key';

const URL = `http:${HOST}:${PORT}/user?${API_KEY}`;

//Parent component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }; 

        YTSearch({key: API_KEY, searchTerm: 'cats'}, (videos) => {
            this.setState({videos});
        });

    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoInfo video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
