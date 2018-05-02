import React, {Component} from 'react';

const VideoList = (props) => {
    return (
        <ul className="col-md-4 list list-group"> 
            {props.videos.length}
        </ul>
    );
};

export default VideoList;