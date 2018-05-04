import React from 'react';

import VideoItem from './video-list-item';

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return (
            <VideoItem
                onVideoSelected={props.onVideoSelected}
                key={video.etag} 
                video={video}/>            
        ); 
    });

    return (
        <ul className="col-md-4 list-group"> 
            {videoItems}
        </ul>
    );
};

export default VideoList;