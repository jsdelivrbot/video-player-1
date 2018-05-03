import React from 'react';

const VideoItem = ({video, onVideoSelected}) => {

    const image = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelected(video)}  className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={image}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;