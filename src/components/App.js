import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization:
            'Client-ID 8a23f49ff9fef406417812330745c3bd0fc50c48f95fdad989a68a59b776b746'
      }
    });
  console.log(response.data.results);
}

  render() {
  return (
    <div className="ui container" style={{ marginTop: "10 px"}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
    );
  }
}

export default App;
