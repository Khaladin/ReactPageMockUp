import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDui_a27fXFYTH0SeO1-p0WOYR8ijB-ZSI';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}

	render () {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
