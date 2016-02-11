import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import API_KEY from './config.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.defaultTerm = 'reactjs';

		this.videoSearch(this.defaultTerm);
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar term={this.defaultTerm} onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}


// Put component into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
