import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from  './components/video_list'
import VideoDetail from './components/video_detail'
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { Route } from 'react-router';
// import thunk from 'redux-thunk';

const API_KEY = 'AIzaSyAYrEUDDwKXMM1_AeulTVPcXkarKTmv3sY'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }

  componentDidMount = () => {
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
