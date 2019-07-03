import React, { Component } from 'react';
import RedirectButton from './RedirectButton';

export class Welcome extends Component {
	render() {
		return (
			<div>
				<h1>Welcome</h1>
				<RedirectButton value="login" />
				<RedirectButton value="signup" />
			</div>
		);
	}
}

export default Welcome;
