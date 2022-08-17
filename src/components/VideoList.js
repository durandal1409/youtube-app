import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos, onVideoItemSelect}) => {

    const renderedItems = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} onVideoItemSelect={onVideoItemSelect}/>
    });
    return <div className="ui relaxed divided list">{renderedItems}</div>
}

export default VideoList

