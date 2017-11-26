import React, { Component } from 'react';

// CONTAINERS
import MoviesList from './containers/movies_list'

class App extends Component {

  componentWillMount(){
    debugger;
     
  }
  render() {
    return (
      <div className="App">
       <MoviesList/>
      </div>
    );
  }
}

export default App;
