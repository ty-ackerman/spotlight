import React, { Component } from 'react';
import Logout from './Logout';

export class Dashboard extends Component {
	render() {
		return (
			<div>
				<h2>Dashboard</h2>
				<Logout setUser={this.props.setUser} />
			</div>
		);
	}
}

export default Dashboard;
