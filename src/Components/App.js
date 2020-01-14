import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Youtube from '../Api/Youtube';



class App extends React.Component{
    state={videos: [], selectedVideo: null};

    onTermSubmit=async (term)=>{
        const Response= await Youtube.get('/search',{
            params: {
                q: term
            }
        });
        this.setState({
            videos: Response.data.items,
            selectedVideo: Response.data.items[0]
        });   
    }
    componentDidMount(){
        this.onTermSubmit('Avengers');
    }

    onVideoSelect=(clip)=>{
        this.setState({selectedVideo: clip});
    }

    render(){
        return (
            <div className='ui container'>
                <SearchBar onSubmitDone= {this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail selectedVideo={this.state.selectedVideo}/>
                        </div>
                        <div className='ui segment five wide column'>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App; 