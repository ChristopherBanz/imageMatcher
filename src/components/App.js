import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

    state = { images: [] };

    onSearchSubmit = (term) => {
        // In order to make a get request using axios, we call this function.  It takes two arguements, the first is the address we make the request to
        // the second will be an object that houses options to customize the request.
        // params are parameters that we add to our requests to specift query strings.  in this case its the term passed into our onSearchSubmit.

        unsplash.get('/search/photos',{
            params: { query: term}            
        }).then((response)=>{this.setState({ images: response.data.results})})
    }

    // alternative to the above promise-based syntax using async/await syntax
    // in this approach, we add the async keyword in front of the method name, add await to whatever is taking "some time" to resolve, and assign the return of that to a variable

        // onSearchSubmit = async (term){
        //     const response = await axios.get('https://api.unsplash.com/search/photos',{
        //         params: { query: term},
        //         headers:{
        //             Authorization: 'Client-ID E_qY6JuUBwRfaUhrlYImgNIvll5KMu8lsfPbHij7RDc'
        //         }
        //     });
        //     console.log(response.data.results);
        // }

    render(){
        return (
            <div className = "ui container" style ={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images ={this.state.images} />
            </div>
        );
    }
}

export default App;