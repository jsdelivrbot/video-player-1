import React, {Component} from 'react';
import _ from 'lodash';
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

        this.state = { 
            videos: [],
            videoSelected: null
         }; 

         this.videoSearch('cats');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                //first video in the list is set to the videoSelected
                videoSelected: videos[0]
            });
        });
    };

    render() {

        //Cap search refresh
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 400)

        return (
            <div>
                <SearchBar onSearchChange={videoSearch}/>
                <VideoInfo video={this.state.videoSelected}/>
                <VideoList 
                    //travels to VideoItem to select a video
                    onVideoSelected={videoSelected => this.setState({videoSelected}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
