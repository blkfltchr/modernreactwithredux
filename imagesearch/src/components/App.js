import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar'

class App extends React.Component {
    
    async onSearchSubmit(value) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: value },
            headers: {
                Authorization: 'Client-ID 3da5364b77318ab46282425039ceaf2485da4adbcdc169620be0c5a6f7653e71',
            }
        });
        
        console.log(response.data.results);
        
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:"1rem"}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};
 
export default App;