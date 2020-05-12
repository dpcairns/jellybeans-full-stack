import React, { Component } from 'react'
import request from 'superagent';

export default class App extends Component {
  state = {
    jellybeans: [],
    loading: false
  }

  componentDidMount = async () => {
    this.setState({ loading: true })
    try {
      const rawJellybeans = await request.get('http://localhost:3000/jellybeans');

      this.setState({ jellybeans: rawJellybeans.body })
    } catch(e) {
      
      console.error(e);
    } finally {

      this.setState({ loading: false })
    }
    
  }

  render() {
    return (
      <div>
        { 
        this.state.loading
        ? <h1>LOADING!</h1>
        : this.state.jellybeans
            .map(jellybean => <div key={Math.random()}>
              <p>{jellybean.color}</p>
              <p>{jellybean.flavor}</p>
              <p>{String(jellybean.is_favorite)}</p>
              <hr/>
          </div>)}
      </div>
    )
  }
}
