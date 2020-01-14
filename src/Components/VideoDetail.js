import React from 'react';


const VideoDetail=({selectedVideo})=>{
    if(!selectedVideo){
        return <div>Loading..</div>
    }
    const {id,snippet}= selectedVideo;
    const videoSrc= `https://www.youtube.com/embed/${id.videoId}`
    return (
        <div className='ui segment'>
            <div className='ui embed'>
                <iframe title='Video Player' src={videoSrc}/>
            </div>
            <h4 className='ui header'>{snippet.title}</h4>
            <p>{snippet.description}</p>
        </div>
    );
};

export default VideoDetail;