import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class App extends Component {
  state = {
    posts: []
  }
  componentDidMount() {

    axios.get("https://reddit.com/r/aww.json?raw_json=1")
      .then(response => {
        this.setState({
          posts: response.data.data.children
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  showImage = image => {
    ipcRenderer.send('toggle-image', image);
  }

  render() {
    return (
      <div className="App">
        <ul className="list-group list-group-flush">
          {this.state.posts.map(post =>
          <li
            key={post.data.id}
            className="list-group-item flex-container"
            onClick={() => this.showImage(post.data.preview.images[0].source.url)}
          >
            <div>{post.data.title}</div>
          </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
