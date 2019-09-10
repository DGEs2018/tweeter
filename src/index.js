import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './components/Avatar';
import Message from './components/Message';
import NameWithHandle from './components/NameWithHandle';
import './index.css';

function Tweet() {
	return (
		<div className="tweet">
			Tweet
			<Avatar />
			<div className="content">
				<Message />
				<NameWithHandle />
			</div>
		</div>
	);
}

ReactDOM.render(<Tweet />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
