import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from  './components/video_list';
import VideoDetail from './components/video_detail';
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
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('travel')
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    })
  }

  render() {
    const searchVideo = _.debounce(term => {this.videoSearch(term)}, 400)
    return (
      <div>
        <nav className="navbar navbar-custom navbar-fixed-top" id="navbar-bottom">
          <div className="container navbar-header">
            VideoSearch
          </div>
        </nav>
                  <br></br>
          <div className="container">
          <SearchBar onSearchChange={searchVideo} />
          </div>


          <div className="container">

            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos} />
          </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
