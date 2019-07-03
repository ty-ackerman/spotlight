import React, { Component } from 'react';
import Logout from './Logout';
import Popup from './Popup';

export class Dashboard extends Component {
	render() {
		const { user } = this.props;
		return (
			<div>
				{user.name ? null : <Popup user={user} setUser={this.props.setUser} />}
				<h2>Dashboard</h2>
				<Logout setUser={this.props.setUser} />
			</div>
		);
	}
}

export default Dashboard;
