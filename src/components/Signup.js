import React, { Component } from 'react';
import axios from 'axios';
import { setToken } from '../services/tokenService';

export class Signup extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		console.log('here');
		const { email, password } = this.state;
		// POST route for signup info into backend
		try {
			const res = await axios.post('/signup', { email, password });
			// this.props.setUser(res.data.data['0']);
			const token = await axios.post('/login', { email, password });
			// this gives us a token
			console.log(token.data.data['0']);
			setToken(token.data.data['0']);
			this.props.getCurrentUser();
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<div>
				<h2>Signup</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="email">Email: </label>
						<input type="email" onChange={this.handleChange} name="email" id="email" placeholder="email" />
					</div>
					<div>
						<label htmlFor="email">Password: </label>
						<input
							type="password"
							onChange={this.handleChange}
							name="password"
							id="password"
							placeholder="Enter your desired password"
						/>
					</div>
					<div>
						<input type="submit" value="Signup" />
					</div>
				</form>
			</div>
		);
	}
}

export default Signup;
