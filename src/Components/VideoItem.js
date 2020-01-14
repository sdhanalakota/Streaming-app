import React from 'react';
import '../Styling/VideoItem.css'

const VideoItem=({video, onVideoSelect})=>{
    const {thumbnails, description, title}= video.snippet;
    const itemClicked=(e)=>{
        onVideoSelect(video);
    }
    return (
        <div className='item video-item' onClick={itemClicked}>
            <img className='ui image' src={thumbnails.medium.url} alt={description}/>
            <div className='content'>
                <div className='header'>{title}</div>
            </div>
        </div>
    );
    
}
export default VideoItem;