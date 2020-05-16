import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images:[]};

     onSearchSubmit = async term=> {
        // make custom async api request
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        // .then((response)=>{ // callback invoked with api data   
        // })
        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                {/* can name callback function anything from react component pass via props */}
                <SearchBar runOnSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}


export default App;