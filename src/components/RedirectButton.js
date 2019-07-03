import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class RedirectButton extends Component {
	state = {
		clicked: false
	};

	handleClick = () => {
		this.setState({ clicked: true });
	};

	render() {
		const { clicked } = this.state;
		const { value } = this.props;
		if (clicked) {
			return <Redirect to={`/${value}`} />;
		}
		return (
			<div>
				<button onClick={this.handleClick}>{value}</button>
			</div>
		);
	}
}

export default RedirectButton;
