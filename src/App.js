import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import { getToken } from './services/tokenService';
import Axios from 'axios';

class App extends Component {
	state = {
		user: null
	};

	componentDidMount() {
		this.getCurrentUser();
	}

	// upon login/signup, user state is set
	setUser = (user) => {
		this.setState({ user });
	};

	// retrieves user token from local storage
	getCurrentUser = async () => {
		const token = getToken();
		if (token) {
			try {
				const res = await Axios.get('/user/current', {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});
				const user = res.data;
				console.log(user);
				this.setState({ user });
			} catch (error) {
				console.log(error);
			}
		}
	};
	render() {
		const { user } = this.state;
		return (
			<div className="App">
				<h1>Spotlight</h1>
				<Router>
					<div>
						<Switch>
							<Route
								exact
								path="/"
								render={() => (user ? <Dashboard setUser={this.setUser} /> : <Redirect to="/login" />)}
							/>
							<Route
								path="/login"
								render={() =>
									user ? <Redirect to="/" /> : <Login getCurrentUser={this.getCurrentUser} />}
							/>
							<Route
								path="/signup"
								render={() =>
									user ? <Dashboard setUser={this.setUser} /> : <Signup setUser={this.setUser} />}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
