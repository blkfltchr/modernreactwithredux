import React from 'react';
import './app.css'

const VideoCard = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title} 
                className="ui image"
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>)
}

export default VideoCard;