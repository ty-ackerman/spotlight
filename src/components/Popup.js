import React, { Component } from 'react';
import axios from 'axios';

export class Popup extends Component {
	state = {
		firstName: null,
		lastName: null
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { _id } = this.props.user;
		const { firstName, lastName } = this.state;
		const res = await axios.patch(`/user/fullname/${_id}`, { firstName, lastName });
		this.props.setUser(res.data.data);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="firstName">
						<input
							onChange={this.handleChange}
							type="text"
							name="firstName"
							id="firstName"
							placeholder="firstName"
						/>
					</label>
					<label htmlFor="lastName">
						<input
							onChange={this.handleChange}
							type="text"
							name="lastName"
							id="lastName"
							placeholder="lastName"
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Popup;
