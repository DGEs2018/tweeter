import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './components/Avatar';
import Message from './components/Message';
import NameWithHandle from './components/NameWithHandle';
import './index.css';

function Tweet() {
    const testTweet = () => {
        message: "I'm trying this for testing my Tweeter page",
        gravatar: "abc",
        author: {
            handle: "mermaid",
            name: "IAMA Cat Person"
        },
        likes: 10, 
        retweets: 0,
        teststamp: "2019-09-11 11:42:45"
    };
	return (
		<div className="tweet">
			Tweet
			<Avatar />
			<div className="content">
				<Message />
				<NameWithHandle />
			</div>
			<div className="buttons">
				<ReplyButton />
				<RetweetButton />
				<LikeButton />
				<MoreOptionsButton />
			</div>
		</div>
	);
}

ReactDOM.render(<Tweet />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
