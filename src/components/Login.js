import React, { Component } from 'react';
import axios from 'axios';
import { setToken } from '../services/tokenService';

export class Login extends Component {
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
		const { email, password } = this.state;
		// POST route for login info
		try {
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
				<h2>Login</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="login-email">Email: </label>
						<input
							type="email"
							id="login-email"
							name="email"
							placeholder="email"
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label htmlFor="login-password">Password: </label>
						<input
							type="password"
							id="login-password"
							name="password"
							placeholder="Password"
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<input type="submit" value="Log In" />
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
