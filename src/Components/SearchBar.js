import React from 'react';


class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state={term: ''}
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmitDone(this.state.term);
    }
    render(){
        return (
            <div className='ui segment' onSubmit={this.onFormSubmit}>
                <form className='ui form'>
                    <div className='field'>
                        <label htmlFor='searchBar'>Search Items</label>
                        <input 
                        id='searchBar'
                        type='text'
                        placeholder="What do you want to watch today??"
                        onChange={(e)=>{this.setState({term: e.target.value})}}/>
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;