import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from  './components/video_list';
import VideoDetail from './components/video_detail';



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
    // the term_.debounce throttles calls. It waits for some time to pass by before calling a function,
    // in this case it waits for 400 milliseconds before calling the function videoSearch.
    // the reason to do this is so as to avoid excessively invoking functions and slowing down performance
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
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos} />
          </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
